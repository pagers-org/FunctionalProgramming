// 랜덤한 숫자 배열에서 짝수 위치는 더하고, 홀수 위치는 곱한 후에 순서대로 누적해라
const { map } = require('../refactoring/areumsheep/map');
const { reduce } = require('../refactoring/areumsheep/reduce');

const pipe = (...logics) => {
  return (target) => logics.reduce((value, logic) => logic(value), target);
};

const businessReduce = (array) => {
  return array.reduce((acc, cur, idx, arr) => {
    if (idx % 2 === 0) acc.push(cur + (arr[idx - 2] ?? 0));
    else acc.push(cur * (arr[idx - 2] ?? 1));
    return acc;
  }, []);
};

const 배수 = (array) => {
  console.log(array);
  const t = [];
  const h = [];

  array.map((value) => {
    if (value % 2 === 0) {
      t.push(value);
    }
    if (value % 3 === 0) {
      h.push(value);
    }
  });
  console.log(t);
  console.log(h);
  return {
    t: t,
    h: h,
  };
};

const call = pipe(businessReduce, 배수);
console.log(call([1, 2, 3, 4, 5, 6, 7]));

