const _forEach = (array, callBack) => {
  if (!callBack) {
    throw new Error("Callback function is required");
  }

  if (array.length === 0) {
    return undefined;
  }

  for (const item of array) {
    callBack(item, ...array);
  }
};

const _map = (array, callBack) => {
  if (!callBack) {
    throw new Error("Callback function is required");
  }

  if (array.length === 0) {
    return [];
  }

  const result = [];
  _forEach(array, (item, idx, copy) => result.push(callBack(item, idx, copy)));

  return result;
};

const _filter = (array, callBack) => {
  if (!callBack) {
    throw new Error("Callback function is required");
  }

  const result = [];
  _forEach(array, (item, idx, copy) => {
    if (callBack(item, idx, copy)) {
      result.push(item);
    }
  });

  return result;
};

const _reduce = (array, callBack, initValue) => {
  if (!callBack) {
    throw new Error("Callback function is required");
  }

  if (array.length === 0) {
    return initValue;
  }

  let result = initValue ?? array[0];
  _forEach(array, (item, idx, copy) => {
    result = callBack(result, item, idx, copy);
  });

  return result;
};

const _take = (array, count) => {
  if (array.length === 0) {
    throw new Error(`Array is required`);
  }

  return array.slice(0, count);
};

const _pipe =
  (...fns) =>
  (value) =>
    _reduce(fns, (acc, fn) => fn(acc), value);

module.exports = {
  _forEach,
  _map,
  _filter,
  _reduce,
  _take,
  _pipe,
};
