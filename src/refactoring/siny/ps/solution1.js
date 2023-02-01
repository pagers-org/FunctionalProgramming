const { reduce, pipe, curry2, sort, G } = require('../utils.js');
const curredSort = curry2(sort);
const solution1 = arr => {
  const calcMulti = (acc, item, i) => {
    if (i % 2) return acc;
    const left = acc.slice(0, i);
    const right = acc.slice(i + 1);
    return [...left, i === 0 ? item : acc[i - 2] * item, ...right];
  };
  const calcAdd = (acc, item, i) => {
    if (!(i % 2)) return acc;
    const left = acc.slice(0, i);
    const right = acc.slice(i + 1);
    return [...left, i === 1 ? item : acc[i - 2] + item, ...right];
  };
  const calcOp = calc => arr => reduce(calc, arr, arr);
  const calcAddByArr = calcOp(calcAdd);
  const calcMultiByArr = calcOp(calcMulti);

  const _중간결과 = pipe(calcAddByArr, calcMultiByArr)(arr);
  const sortByAsc = curredSort((a, b) => a - b);
  const _2의_배수만_filter = G.filter(item => !(item % 2));
  const _3의_배수만_filter = G.filter(item => !(item % 3));
  return {
    t: pipe(_2의_배수만_filter, sortByAsc)(_중간결과),
    h: pipe(_3의_배수만_filter, sortByAsc)(_중간결과),
  };
};

module.exports = solution1;
