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

const _keys = (obj) => {
  const keys = [];

  for (const key in obj) {
    keys.push(key);
  }

  return keys;
};

const _entries = (obj) => {
  return _map(_keys(obj), (key) => [key, obj[key]]);
};

const _flat = (array, depth = 1) => {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) && depth > 0) {
      newArray = newArray.concat(_flat(array[i], depth - 1));
    } else {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

const _groupBy = (items, callback) => {
  const isArray = Array.isArray(items);
  const array = isArray
    ? items
    : Object.entries(items)
        .flat()
        .filter((item) => typeof item === "number");

  return _reduce(
    array,
    (grouped, element) => {
      const key = callback(element);
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(element);
      return grouped;
    },
    {}
  );
};

_groupBy({ a: 6.1, b: 4.2, c: 6.3 }, Math.floor);

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
  _groupBy,
  _pipe,
};
