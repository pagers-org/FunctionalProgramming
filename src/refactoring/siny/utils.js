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
};
