define(function (require) {
  var module = require('modules').get('kibana');

  module.constant('refreshIntervals', [
    { value : 0, display: '不自动刷新', section: 0},

    { value : 5000, display: '每5秒钟', section: 1},
    { value : 10000, display: '每10秒钟', section: 1},
    { value : 30000, display: '每30秒钟', section: 1},
    { value : 45000, display: '每45秒钟', section: 1},

    { value : 60000, display: '每分钟', section: 2},
    { value : 300000, display: '每5分钟', section: 2},
    { value : 900000, display: '每15分钟', section: 2},
    { value : 1800000, display: '每30分钟', section: 2},

    { value : 3600000, display: '每小时', section: 3},
    { value : 7200000, display: '每2小时', section: 3},
    { value : 43200000, display: '每12小时', section: 3},
    { value : 86400000, display: '每天', section: 3}
  ]);

});
