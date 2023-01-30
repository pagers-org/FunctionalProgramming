// 기존 메소드
nums = [1, 2, 3, 4, 5];
const reduce = nums.reduce((a, b) => a + b);

console.log(reduce);

console.log("--------------");

// 직접 구현 함수

Array.prototype.customReduce = function (f, init) {
  let acc = init || 0;
  this.forEach((el) => {
    acc = f(acc, el);
  });
  return acc;
};

console.log(nums.customReduce((a, b) => a + b)); //15
console.log(
  nums.customReduce((a, b) => a + b, 5) //20
);
