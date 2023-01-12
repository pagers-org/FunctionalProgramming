// 기존 메소드
nums = [1, 2, 3, 4, 5];
const map = nums.map((a, b) => a + b);

console.log(map);

console.log("--------------");

// 커스텀
const customMap = (arr, f) => {
  const newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    newArr.push(f(item));
  }
  return newArr;
};

// test print
console.log(customMap([1, 2, 3, 4, 5], (el) => el * 2));
// [ 2, 4, 6, 8, 10 ]
