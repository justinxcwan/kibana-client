define(function () {
  return function configDefaultsProvider() {
    // wraped in provider so that a new instance is given to each app/test

    return {
      'query:queryString:options': {
        value: '{ "analyze_wildcard": true }',
        description: 'Lucene搜索语句配置',
        type: 'json'
      },
      'sort:options': {
        value: '{ "unmapped_type": "boolean" }',
        description: 'Elasticsearch排序参数',
        type: 'json'
      },
      'dateFormat': {
        value: 'YYYY-MM-DD HH:mm:ss.SSS',
        description: '日期时间显示格式',
      },
      'dateFormat:scaled': {
        type: 'json',
        value:
          '[\n' +
          '  ["", "hh:mm:ss.SSS"],\n' +
          '  ["PT1S", "HH:mm:ss"],\n' +
          '  ["PT1M", "HH:mm"],\n' +
          '  ["PT1H",\n' +
          '      "YYYY-MM-DD HH:mm"],\n' +
          '  ["P1DT", "YYYY-MM-DD"],\n' +
          '  ["P1YT", "YYYY"]\n' +
          ']',
        description: '定义如何缩写时间显示串。允许的键值参见 ISO 8601 标准：' +
        ' http://en.wikipedia.org/wiki/ISO_8601#Time_intervals'
      },
      'defaultIndex': {
        value: null,
        description: '缺省索引名',
      },
      'metaFields': {
        value: ['_id', '_type'],
        description: '需要显示的_source之外的字段',
      },
      'discover:sampleSize': {
        value: 500,
        description: '表格中最大显示日志数',
      },
      'fields:popularLimit': {
        value: 10,
        description: '需要显示字段中最常见的N个值',
      },
      'format:numberPrecision': {
        value: 3,
        description: '数字精度',
      },
      'histogram:barTarget': {
        value: 50,
        description: '时间柱状图每单位最小时间范围',
      },
      'histogram:maxBars': {
        value: 100,
        description: '时间柱状图最多显示单位',
      },
      'visualization:tileMap:maxPrecision': {
        value: 12,
        description: '地图范围查找允许的最大精度：7代表高精度、10为很高精度、' +
        '12为最高精度。详细解释参见：http://www.elastic.co/guide/en/elasticsearch/reference/current/' +
        'search-aggregations-bucket-geohashgrid-aggregation.html#_cell_dimensions_at_the_equator',
      },
      'csv:separator': {
        value: ',',
        description: '导出数据时使用的分割符',
      },
      'csv:quoteValues': {
        value: true,
        description: '使用CSV作为导出格式？',
      },
      'history:limit': {
        value: 10,
        description: '显示历史纪录最多条数',
      },
      'shortDots:enable': {
        value: false,
        description: '缩短长字符串。比如把 foo.bar.baz 显示成 f.b.baz',
      },
      'truncate:maxHeight': {
        value: 115,
        description: '表格每行最高高度。设置成0关闭自动截断功能。'
      },
      'indexPattern:fieldMapping:lookBack': {
        value: 5,
        description: '如果索引名包括时间，系统查找字段类型映射时，此配置项决定最多找最近几天的索引。'
      },
      'format:defaultTypeMap': {
        type: 'json',
        value: [
          '{',
          '  "ip": { "id": "ip", "params": {} },',
          '  "date": { "id": "date", "params": {} },',
          '  "number": { "id": "number", "params": {} },',
          '  "_source": { "id": "_source", "params": {} },',
          '  "_default_": { "id": "string", "params": {} }',
          '}',
        ].join('\n'),
        description: '每种字段类型对应的显示配置名称 ' +
          '如果没有配置，使用"_default_"。'
      },
      'format:number:defaultPattern': {
        type: 'string',
        value: '0,0.[000]',
        description: '数值类型字段的显示方式'
      },
      'format:bytes:defaultPattern': {
        type: 'string',
        value: '0,0.[000]b',
        description: '字节类型字段的显示方式'
      },
      'format:percent:defaultPattern': {
        type: 'string',
        value: '0,0.[000]%',
        description: '百分比类型字段的显示方式'
      },
      'format:currency:defaultPattern': {
        type: 'string',
        value: '(¥0,0.[00])',
        description: '货币类型字段的显示方式'
      }
    };
  };
});
