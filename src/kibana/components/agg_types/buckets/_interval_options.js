define(function (require) {
  return function IntervalOptionsService(Private) {
    var moment = require('moment');
    require('directives/input_whole_number');

    // shorthand
    var ms = function (type) { return moment.duration(1, type).asMilliseconds(); };

    return [
      {
        display: '自动',
        val: 'auto',
        enabled: function (agg) {
          // not only do we need a time field, but the selected field needs
          // to be the time field. (see #3028)
          return agg.fieldIsTimeField();
        }
      },
      {
        display: '秒',
        val: 's'
      },
      {
        display: '分钟',
        val: 'm'
      },
      {
        display: '小时',
        val: 'h'
      },
      {
        display: '天',
        val: 'd'
      },
      {
        display: '周',
        val: 'w'
      },
      {
        display: '月',
        val: 'M'
      },
      {
        display: '年',
        val: 'y'
      },
      {
        display: '自定义',
        val: 'custom'
      }
    ];
  };
});