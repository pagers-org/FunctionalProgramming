const map = (array, callback) => {
  let i = -1;
  const result = [];

  while (++i < array.length) {
    result.push(callback(array[i], i, array));
  }
  return result;
};

export default map;