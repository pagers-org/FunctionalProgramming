const map = (array, callback) => {
  let i = 0;
  const result = [];
  const arrayLength = array.length;

  while (i < arrayLength) {
    result.push(callback(array[i], i, array));
    i++;
  }
  return result;
};

exports.map = map;
