const forEach = (arr, cb) => {
  let currentIndex = 0;
  while (currentIndex < arr.length) {
    const item = arr[currentIndex];
    cb(item, currentIndex, [...arr]);
    currentIndex++;
  }
};

const map = (arr, cb) => {
  const result = [];

  forEach(arr, (...args) => {
    result.push(cb(...args));
  });

  return result;
};

const filter = (arr, cb) => {
  const result = [];

  forEach(arr, (...args) => {
    const cbResult = cb(...args);
    if (cbResult) {
      result.push(item);
    }
  });

  return result;
};

const reduce = (arr, cb, initialValue) => {
  let accumulatedValue = initialValue ?? 0;

  forEach(arr, (...args) => {
    accumulatedValue = cb(accumulatedValue, ...args);
  });

  return accumulatedValue;
};

module.exports = { filter, forEach, map, reduce };
