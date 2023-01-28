// 기존 메소드
nums = [1, 2, 3, 4, 5];
const map = nums.map((el) => el * 2);

console.log(map);

console.log("--------------");

// 커스텀
Array.prototype.customMap = function (f) {
  const newArr = [];

  for (var i = 0; i < this.length; i++) {
    var item = this[i];
    newArr.push(f(item));
  }
  return newArr;
};

// test print
console.log(nums.customMap((el) => el * 2));
// [ 2, 4, 6, 8, 10 ]
