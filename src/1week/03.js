const { accumulate } = require('./02.js');

function multiDimensionalAccumulate(multiDimensionalArr) {
  return accumulate(multiDimensionalArr.map((arr, i) => arr.filter((item, j) => j < i)).flat(), 0);
}

exports.multiDimensionalAccumulate = multiDimensionalAccumulate;
