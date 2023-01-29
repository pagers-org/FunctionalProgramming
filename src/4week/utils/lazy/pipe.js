const { reduce } = require('./reduce');

const pipe =
  (...logics) =>
  (target) =>
      reduce(logics, (value, logic) => logic(value), target);
    
exports.pipe = pipe;