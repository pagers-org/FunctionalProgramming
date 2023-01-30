const _reduce = (arr, f, init) => {
  let acc = init || 0;
  arr.forEach((el) => {
    acc = f(acc, el);
  });
  return acc;
};

exports._reduce = _reduce;
