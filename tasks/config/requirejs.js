module.exports = function (grunt) {
  var config = {
    build: {
      options: {
        appDir: '<%= build %>/src',
        dir: '<%= build %>/kibana/public',
        mainConfigFile: '<%= build %>/src/require.config.js',
        modules: [
          {
            name: 'kibana',
            excludeShallow: [
              '../config',
              'text!config'
            ],
            include: []
          }
        ],

        optimize: 'none',
        optimizeCss: 'none',
        // optimizeAllPluginResources: false,
        skipDirOptimize: true,

        // removeCombined: true,
        // findNestedDependencies: true,
        // normalizeDirDefines: 'all',
        // inlineText: true,
        // skipPragmas: true,

        done: function (done, output) {
          var analysis = require('rjs-build-analysis');
          var tree = analysis.parse(output);
          var duplicates = analysis.duplicates(tree);

          if (duplicates.length > 0) {
            grunt.log.subhead('Duplicates found in requirejs build:');
            grunt.log.warn(duplicates);
            return done(new Error('r.js built duplicate modules, please check the excludes option.'));
          } else {
            var relative = [];
            var bundles = tree.bundles || [];
            bundles.forEach(function (bundle) {
              bundle.children.forEach(function (child) {
                if (child.match(/\.\//)) relative.push(child + ' is relative to ' + bundle.parent);
              });
            });

            if (relative.length) {
              grunt.log.subhead('Relative modules found in requirejs build:');
              grunt.log.warn(relative);
              return done(new Error('r.js build contains relative modules, duplicates probably exist'));
            }
          }

          //TODO Temporary hacks to uglify index.js, othervise setting optimize:'uglify2' 
          // results in broken index.js
          var join = require('path').join;
          var path = join(grunt.config.get('build'), 'kibana', 'public');

          console.log('uglifying ' + join(path, 'index.js'));

          var args = ['-o', join(path, 'index.min.js'), join(path, 'index.js')];

          // var Promise = require('bluebird');
          var child_process = require('child_process');
          // var execFileSync = Promise.promisify(child_process.execFileSync);
          
          child_process.execFileSync('uglifyjs', args);
          child_process.execFileSync('/bin/mv', args.slice(1));

          done();
        }
      }
    }
  };

  // include bundled plugins in the build
  var main = config.build.options.modules[0];
  grunt.bundled_plugin_module_ids.forEach(function (moduleId) {
    main.include.push(moduleId);
  });

  return config;
};
