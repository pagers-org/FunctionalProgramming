const { _reduce } = require("./reduce.js");

const pipe = (...fns) => {
  return (target) => _reduce(fns, (val, logic) => logic(val), target);
};

exports.pipe = pipe;

// 일급 함수는 배열 안에 값으로써 담길 수 있다. [fn1, fn2, ...]
