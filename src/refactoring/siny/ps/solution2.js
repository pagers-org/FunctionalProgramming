const { reduce, pipe, curry2, sort, map, curry3, split, trim, toArray } = require('../utils.js');
const curredMap = curry2(map);
const curredReduce = curry3(reduce);
const curredSplit = curry2(split);
const curredSort = curry2(sort);

const solution2 = str => {
  const splitByComma = curredSplit(',');
  const addToSet = (set, key) => set.add(key);
  const compareTo_글자수가_긴것_우선정렬_글자수가_같으면_알파벳빠른순 = (a, b) =>
    (b.length === a.length && a.charCodeAt(0) - b.charCodeAt(0)) || b.length - a.length;

  return pipe(
    splitByComma,
    curredMap(trim),
    curredReduce(addToSet)(new Set()),
    toArray,
    curredSort(compareTo_글자수가_긴것_우선정렬_글자수가_같으면_알파벳빠른순),
  )(str);
};

module.exports = solution2;
