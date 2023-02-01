const { filter } = require('./filter');
const { groupBy } = require('./groupBy');
const { map } = require('./map');
const { pipe } = require('./pipe');
const { reduce } = require('./reduce');
const { uniqueBy } = require('./uniqueBy');

exports.L = {
  filter,
  groupBy,
  map,
  pipe,
  reduce,
  uniqueBy,
};
