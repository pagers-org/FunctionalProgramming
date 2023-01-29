function map(fn) {
  const result = [];
  return (iter) => {
    for (const item of iter) {
      result.push(fn(item));
    }
    return result;
  }
}

exports.map = map;