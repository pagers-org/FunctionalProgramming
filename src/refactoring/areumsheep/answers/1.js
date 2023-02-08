// 랜덤한 숫자 배열에서 짝수 위치는 더하고, 홀수 위치는 곱한 후에 순서대로 누적해라

const { pipe } = require('../utils/pipe');

const 짝수_더하기_홀수_곱하기 = (array) => {
  return array.reduce((acc, cur, idx, arr) => {
    if (idx % 2 === 0) acc.push(cur + (arr[idx - 2] ?? 0));
    else acc.push(cur * (arr[idx - 2] ?? 1));
    return acc;
  }, []);
};

const 배수_분리하기 = (array) => {
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
  return {
    t: t,
    h: h,
  };
};

const call = pipe(짝수_더하기_홀수_곱하기, 배수_분리하기);
console.log(call([1, 2, 3, 4, 5, 6, 7]));

