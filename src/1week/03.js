function multiDimensionalAccumulate(multiDimensionalArr) {
  let accumulator = 0;

  for (let i = 0; i < multiDimensionalArr.length; i++) {
    for (let j = 0; j < multiDimensionalArr[i].length; j++) {
      if (j < i) {
        accumulator += multiDimensionalArr[i][j];
      }
    }
  }

  return accumulator;
}

exports.multiDimensionalAccumulate = multiDimensionalAccumulate;
