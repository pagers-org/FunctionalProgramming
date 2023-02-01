function map(fn) {
  return function* (iter) {
    for (const item of iter) {
      yield fn(item);
    }
  };
}

exports.map = map;
