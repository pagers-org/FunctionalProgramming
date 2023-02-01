/**
 * 일급객체를 이용하기 위한 유틸 함수
 * */
const pipe =
  (...fns) =>
  data => {
    return reduce((accData, curFn) => curFn(accData), data, fns);
  };

const curry2 = fn => a => b => {
  return fn(a, b);
};

const curry3 = fn => a => b => c => {
  return fn(a, b, c);
};

/**
 * 배열 조작 함수
 * */

const filter = (condition, arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i], i, [...arr])) newArr.push(arr[i]);
  }
  return newArr;
};

const sort = (compareTo, arr) => {
  const newArr = [...arr];
  newArr.sort(compareTo);
  return newArr;
};

const reduce = (fn, init, arr) => {
  let newValue = init;
  for (let i = 0; i < arr.length; i++) {
    newValue = fn(newValue, arr[i], i, [...arr]);
  }
  return newValue;
};
const map = (fn, arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i, [...arr]));
  }
  return newArr;
};
const toArray = obj => {
  if (obj instanceof Map || obj instanceof Set) {
    return [...obj];
  }
  return Object.entries(obj);
};

/**
 * string 조작 함수
 * */
const trim = str => str.trim();
const split = (separator, str) => str.split(separator);

const G = {};

function* gMap(fn, arr) {
  for (const item of arr) {
    yield fn(item);
  }
}

function* gFilter(fn, arr) {
  for (const item of arr) {
    if (fn(item)) yield item;
  }
}

function* gTake(num, arr) {
  let count = 0;
  for (const item of arr) {
    if (count++ !== num) yield item;
  }
}

function* gTakeWhile(fn, arr) {
  for (const item of arr) {
    if (fn(item)) yield item;
  }
}

function* gRange(end) {
  let start = 0;
  while (start !== end) {
    yield start++;
  }
}

function* gSkip(n, arr) {
  let count = 0;
  for (const item of arr) {
    if (count++ >= n) yield item;
  }
}

G.map = curry2(gMap);
G.filter = curry2(gFilter);
G.range = gRange;
G.take = curry2(gTake);
G.takeWhile = curry2(gTakeWhile);
G.skip = curry2(gSkip);

function groupBy(iter, callback) {
  const newObj = {};
  const genKey = item => {
    if (typeof callback === 'function') {
      return callback(item);
    } else {
      // callback은 index 혹은 key
      return item[callback];
    }
  };
  const genIter = anIter => {
    if (anIter instanceof Array) {
      return anIter;
    }
    if (anIter instanceof Object) {
      return Object.values(anIter);
    }
    return anIter;
  };
  for (const item of genIter(iter)) {
    let key = genKey(item);

    newObj[key] = newObj?.[key] === undefined ? [item] : [...newObj[key], item];
  }
  return newObj;
}

function* gUnique(arr) {
  const map = new Map();
  if (arr === undefined || arr === null) {
    throw new Error('첫번째 인자는 꼭 필요합니다.');
  }
  for (const item of arr) {
    const key = JSON.stringify(item);
    if (!map.has(key)) {
      yield item;
    }
    map.set(key, item);
  }
}

G.unique = gUnique;
module.exports = {
  filter,
  reduce,
  map,
  sort,
  split,
  trim,
  pipe,
  curry2,
  curry3,
  toArray,
  groupBy,
  G,
};
