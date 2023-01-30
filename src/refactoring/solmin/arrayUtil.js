function newMap(array, fn) {
  var index = 0;
  var max = array.length;
  var newArr = [];
  while (index < max) {
    var item = array[index];
    newArr = [...newArr, fn(item)];
    index += 1;
  }
  return newArr;
}

function newFilter(array, fn) {
  var index = 0;
  var max = array.length;
  var newArr = [];
  while (index < max) {
    var item = array[index];
    if (fn(item)) {
      newArr = [...newArr, item];
    }
    index += 1;
  }
  return newArr;
}

function newReduce(array, fn, initial) {
  var index = 0;
  var max = array.length;
  var result = initial;

  while (index < max) {
    var cur = array[index];
    result = fn(result, cur, index, array);
    index += 1;
  }
  return result;
}

module.exports = {
  map: newMap,
  filter: newFilter,
  reduce: newReduce,
};
