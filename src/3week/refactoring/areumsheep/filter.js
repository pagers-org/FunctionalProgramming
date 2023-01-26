const filter = (array, callback) => { 
  let i = -1;
  const result = [];

  while (++i < array.length) {
    const condition = callback(array[i], i, array);
    if (condition) result.push(array[i]);
  }
  return result;
};

exports.filter = filter;