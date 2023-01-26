// 기존 메소드
nums = [1, 2, 3, 4, 5];
const filter = nums.filter((el) => el < 3);

console.log(filter);

console.log("--------------");
// 직접 구현 함수
Array.prototype.customFilter = function (f) {
  const newArr = [];

  for (var i = 0; i < this.length; i++) {
    var item = this[i];
    if (f(item)) newArr.push(item);
  }

  return newArr;
};
console.log(nums.customFilter((el) => el < 3));
