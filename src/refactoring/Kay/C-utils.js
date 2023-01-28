// Curring이 있는 Util들 입니다.

const _forEach = (callback) => (array) => {
  if (!callback) {
    throw new Error("Callback function is required");
  }

  if (array.length === 0) {
    return undefined;
  }

  for (const item of array) {
    callback(item, ...array);
  }
};

const _map = (callback) => (array) => {
  if (!callback) {
    throw new Error("Callback function is required");
  }

  if (array.length === 0) {
    return [];
  }

  const result = [];
  _forEach((item, idx, copy) => result.push(callback(item, idx, copy)))(array);

  return result;
};

const _filter = (callback) => (array) => {
  if (!callback) {
    throw new Error("Callback function is required");
  }

  const result = [];
  _forEach((item, idx, copy) => {
    if (callback(item, idx, copy)) {
      result.push(item);
    }
  })(array);

  return result;
};

const _reduce = (callback, initValue) => (array) => {
  if (!callback) {
    throw new Error("Callback function is required");
  }

  if (array.length === 0) {
    return initValue;
  }

  let result = initValue ?? array[0];
  _forEach((item, idx, copy) => {
    result = callback(result, item, idx, copy);
  })(array);

  return result;
};

const _take = (count) => (array) => {
  if (array.length === 0) {
    throw new Error(`Array is required`);
  }

  return array.slice(0, count);
};

const _pipe =
  (...fns) =>
  (initialValue) =>
    _reduce((acc, fn) => fn(acc), initialValue)(fns);

const C = {
  _forEach,
  _map,
  _filter,
  _reduce,
  _take,
  _pipe,
};

module.exports = { C };
