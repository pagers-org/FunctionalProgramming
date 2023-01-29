function filter(fn) {
  const result = [];
  return (iter) => {
    for (const item of iter) {
      if (fn(item)) result.push(item);
    }
    return result;
  }
}

exports.filter = filter;