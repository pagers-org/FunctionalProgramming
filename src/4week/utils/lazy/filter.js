function filter(fn) {
  return function* (iter) {
    for (const item of iter) {
      if (fn(item)) yield item;
    }
  };
}

exports.filter = filter;
