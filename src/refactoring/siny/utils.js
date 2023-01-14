/**
 * map
 * */
const map = (fn, arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i, [...arr]));
  }
  return newArr;
};

/**
 * filter
 * */
const filter = (condition, arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i], i, [...arr])) newArr.push(arr[i]);
  }
  return newArr;
};

/**
 * reduce
 * */
const reduce = (fn, init, arr) => {
  let newValue = init;
  for (let i = 0; i < arr.length; i++) {
    newValue = fn(newValue, arr[i], i, [...arr]);
  }
  return newValue;
};

module.exports = {
  map,
  filter,
  reduce,
};
