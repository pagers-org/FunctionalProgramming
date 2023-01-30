const { NL } = require('../non-lazy/_index');

const pipe =
  (...logics) =>
  (target) =>
      NL.reduce(logics, (value, logic) => logic(value), target);
    
exports.pipe = pipe;