const forEach = (array, callback) => {
    for(let i = 0; i < array.length; i++){
      let item = array[i];
      callback(item, i, [...array])
    }
};

const map = (array, callback) => {
  const newArray = [];

  forEach(array, (item,i,array) => newArray.push(callback(item, i, array)));
  return newArray;
}

const filter = (array, callback) => {
  const newArray = [];

  forEach(array, (item, i, array)=> callback(item, i, array) && newArray.push(item));
  return newArray;
}

const reduce = (array, callback, initialValue) => {
  let value = initialValue ?? null;

  forEach(array, (item, i, array)=> {
    value = callback(value, item, i, array);
  })
  return value;
}