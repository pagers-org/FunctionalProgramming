const reduce = (array, callback, initialValue) => {
  let i = -1;
  let returnValue = initialValue || (i++ && array[0]);
  const arrayLength = array.length;

  while (++i < arrayLength) {
    returnValue = callback(returnValue, array[i], i, array);
  }
  return returnValue;
};

exports.reduce = reduce;