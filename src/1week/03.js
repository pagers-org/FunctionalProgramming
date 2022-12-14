const { accumulate } = require('./02.js');

const filter_왼쪽_아래_삼각형 = (arr, i) => arr.filter((item, j) => j < i);
function multiDimensionalAccumulate(multiDimensionalArr) {
  return accumulate(multiDimensionalArr.map(filter_왼쪽_아래_삼각형).flat());
}

exports.multiDimensionalAccumulate = multiDimensionalAccumulate;
