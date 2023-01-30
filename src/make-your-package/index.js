// 여기에 자신의 패키지를 작성할 거에요!
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

module.exports = {
    map,
}
