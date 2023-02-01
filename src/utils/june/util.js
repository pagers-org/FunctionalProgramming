const map = callback => {
  return function* (iter) {
    for (const item of iter) {
      yield callback(item);
    }
  };
};

const filter = callback => {
  return function* (iter) {
    for (const item of iter) {
      if (callback(item)) yield item;
    }
  };
};

const take = n => {
  return function* (iter) {
    let i = 0;
    for (const item of iter) {
      if (i >= n) return;
      yield item;
      i += 1;
    }
  };
};

const pipe =
  (...fns) =>
  iter =>
    fns.reduce((result, fn) => fn(result), iter);

const _groupBy = (iter, fn) => {
  const result = {};
  if (!iter[Symbol.iterator]) {
    iter[Symbol.iterator] = function* () {
      for (const key of Object.keys(iter)) yield iter[key];
    };
  }
  for (const item of iter) {
    const key = fn(item);
    const values = result[key];
    result[key] = values ? [...values, item] : [item];
  }
  return result;
};

const shallowEqual = (a, b) => {
  for (const key of Object.keys(a)) {
    if (a[key] !== b[key]) return false;
  }
  return true;
};

const unique = (arr, callback, isSorted) => {
  const uniqueSet = new Set([]);
  const newArr = [...arr];
  uniqueSet.add(newArr.shift());
  for (const item of newArr) {
    const transformed = callback ? callback(item) : item;
    const isObject = transformed !== null && typeof transformed === 'object';
    if (isObject) {
      let included = false;
      for (const value of uniqueSet.values()) {
        if (shallowEqual(value, transformed)) included = true;
      }
      if (!included) uniqueSet.add(transformed);
    } else {
      if (!uniqueSet.has(transformed)) uniqueSet.add(transformed);
    }
  }
  const result = Array.from(uniqueSet);
  if (isSorted === false) result.sort((a, b) => a - b);
  return result;
};

module.exports = {
  map,
  filter,
  take,
  pipe,
  _groupBy,
  unique,
  shallowEqual,
};
