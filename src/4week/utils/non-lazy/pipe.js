const { reduce } = require('./reduce');

const pipe = (...logics) => {
  return (target) => reduce(logics, (value, logic) => logic(value), target);
};

exports.pipe = pipe;