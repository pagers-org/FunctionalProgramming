// 기존 메소드
nums = [1, 2, 3, 4, 5];
const map = nums.map((el) => el * 2);

console.log(map);

console.log("--------------");

// 커스텀
const _map = (arr, f) => {
  const newArr = [];

  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    newArr.push(f(item));
  }
  return newArr;
};

exports._map = _map;
