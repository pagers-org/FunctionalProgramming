// 전, 후 사이 공백이 존재하는 어떤 문자열을 입력받을 때, 
// 쉼표 기준으로 문자열을 자르고
// 전, 후에 존재하는 공백은 제거하고
// 모든 문자열을 비교하고 중복된 값을 제거하고
// 문자열의 길이 순서대로 반환해주세요.

const { pipe } = require('../utils/pipe');
const { reduce } = require('../utils/reduce');

const splitByComma = (str) => str.split(',');
const trimArray = (array) => reduce(array, (acc, value) => acc.concat(value.trim()), []);
const distinctArray = (array) => [...new Set(array)];
const compareLength = (array) => array.sort((a, b) => a.length - b.length);

const call = pipe(splitByComma, trimArray, distinctArray, compareLength);
console.log(call('asfasdfkl , sdf,asdf as  , ddsf,asdfnkl, as, as'));