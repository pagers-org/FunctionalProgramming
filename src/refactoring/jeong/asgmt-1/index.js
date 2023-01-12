//TODO:
// 세 함수는 구조가 비슷하다.
// example-2 forEach 이용해서 각 세 함수 리팩토링 해보기

Array.prototype.forEach = function (method, f, initialValue) {
  let answer = [];

  for (var i = 0; i < this.length; i++) {
    var item = this[i];
    if (method === "map") customMap(item, answer, f);
    if (method === "filter") customFilter(item, answer, f);
    if (method === "reducer") customReduce(item, answer, f, initialValue);
  }

  if (method === "reducer") {
    console.log(answer[answer.length - 1]);
    return;
  } else console.log(answer);
};

const customMap = (item, arr, f) => {
  return arr.push(f(item));
};

const customFilter = (item, arr, f) => {
  if (f(item)) arr.push(item);
  return arr;
};
const customReduce = (item, arr, f, initialValue) => {
  //initialValue가 제공되지 않으면, reduce는 인덱스 0을 건너뛰고 인덱스 1부터 순회하고 accumulator는 배열 첫 번째 값과 같다.
  let acc;

  if (initialValue) {
    acc = initialValue;
    acc = f(acc, item);
  } else {
    acc = item;
    acc += f(acc, item);
  }

  arr.push(acc);

  return arr;
};

// test

const nums = [1, 2, 3, 4, 5];

nums.forEach("map", (el) => el * 2); //[ 2, 4, 6, 8, 10 ]
nums.forEach("filter", (el) => el < 3); //[1,2]
nums.forEach("reducer", (a, b) => a + b); //15
nums.forEach("reducer", (a, b) => a + b, 5); //20
