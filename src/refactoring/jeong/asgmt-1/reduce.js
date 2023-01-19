// 기존 메소드
nums = [1, 2, 3, 4, 5];
const reduce = nums.reduce((a, b) => a + b);

console.log(reduce);

console.log("--------------");

// 직접 구현 함수

Array.prototype.customReduce = function (f, initialValue) {
  let i = 0;
  let acc;
  //initialValue가 제공되지 않으면, reduce는 인덱스 0을 건너뛰고 인덱스 1부터 순회하고 accumulator는 배열 첫 번째 값과 같다.
  initialValue ? (acc = initialValue) : ([i, acc] = [1, this[0]]);
  for (; i < this.length; i++) {
    acc += this[i];
  }
  return acc;
};

console.log(
  nums.customReduce((a, b) => {
    a + b;
  })
); //15
console.log(
  nums.customReduce((a, b) => {
    a + b;
  }, 5) //20
);
