const reduce = (array, callback, initialValue) => {
  let i = -1;
  let returnValue = initialValue;
  const arrayLength = array.length;
  
  if (initialValue === undefined && arrayLength >= 1) {
    i++;
    returnValue = array[0];
  }
  if (returnValue === undefined) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  while (++i < arrayLength) {
    returnValue = callback(returnValue, array[i], i, array);
  }
  return returnValue;
};

exports.reduce = reduce;