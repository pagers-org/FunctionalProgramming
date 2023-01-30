const { filter } = require('./filter');
const { map } = require('./map');
const { reduce } = require('./reduce');
const { pipe } = require('./pipe');
const { groupBy } = require('./groupBy');
const { unique } = require('./unique');
const { uniqueBy } = require('./uniqueBy');

// Non-Lazy의 줄임말 = NL
exports.NL = {
  filter,
  map,
  reduce,
  pipe,
  groupBy,
  unique,
  uniqueBy
}