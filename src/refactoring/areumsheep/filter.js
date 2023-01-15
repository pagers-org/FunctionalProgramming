const filter = (array, callback) => { 
  let i = -1;
  const result = [];
  const arrayLength = array.length;

  while (++i < arrayLength) {
    const condition = callback(array[i], i, array);
    if (condition) result.push(array[i]);
  }
  return result;
};

exports.filter = filter;