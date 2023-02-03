const { re } = require('@babel/core/lib/vendor/import-meta-resolve');
const forEach = (array, callBack) => {
  for (let i = 0; i < array.length; i++) {
    callBack(array[i], i, ...array);
  }
};

// map
const oldMap = (array, callBack) => {
  const result = [];
  forEach(array, (item, idx, copy) => result.push(callBack(item, idx, copy)));

  return result;
};

function* mapGenerator(array, func) {
  for (let i = 0; i < array.length; i++) {
    yield func(array[i], i);
  }
}

const map = (array, func) => [...mapGenerator(array, func)];

// filter
const oldFilter = (array, func) => {
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (func(item, i)) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
};

function* filterGenerator(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (func(array[i], i)) {
      yield array[i];
    }
  }
}

const filter = (array, func) => [...filterGenerator(array, func)];

// reduce
const oldReduce = (array, func, acc) => {
  for (let i = 0; i < array.length; i++) {
    acc = func(acc, array[i], i);
  }
  return acc;
};

function* reduceGenerator(array, func, acc) {
  for (let i = 0; i < array.length; i++) {
    acc = func(acc, array[i], i);
  }
  yield acc;
}

const reduce = (array, func, acc) => reduceGenerator(array, func, acc).next().value;

// groupBy
// uniq

module.exports = {
  oldMap,
  map,
  oldFilter,
  filter,
  oldReduce,
  reduce,
};
