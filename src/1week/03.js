const { accumulate } = require("./02");

function multiDimensionalAccumulate(multiDimensionalArr) {
  let accumulator = 0;

  for (let i = 0; i < multiDimensionalArr.length; i++) {
    accumulator += accumulate(multiDimensionalArr[i].slice(0, i));
  }

  return accumulator;
}

exports.multiDimensionalAccumulate = multiDimensionalAccumulate;
