define(function (require) {
  var _ = require('lodash');
  return function (bucket, agg) {
    if (bucket && _.isPlainObject(bucket.buckets)) {
      return _.map(bucket.buckets, function (value, key) {
        var item = _.cloneDeep(value);
        item.key = agg ? agg.getKey(value, key) : key;
        return item;
      });

    } else {
      return bucket && bucket.buckets || [];
    }
  };
});
