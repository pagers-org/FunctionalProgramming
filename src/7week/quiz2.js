import _ from './roy-utils.js'

/*
2. 전/후/사이 공백이 존재하는 어떤 문자열을 입력받을 때
,를 기준으로 문자열을 자르고
전/후에 존재하는 공백은 제거하고
모든 문자열을 비교하여 중복된 값을 제거하고
문자열의 길이 순대로 반환해 주세요.
*/

const solve = str => _.pipe(
  _.pSplit(','),
  _.pMap(_.trim),
  _.unique,
  _.pSort((a, b) => a.length - b.length),
  _.logger(res => `input: "${str}"\nresult: [ ${res.join(', ')} ]`)
)(str)

solve('aha , haha, aha,  ahahaha ,ahaha ,  haha, ah')
solve('a, ab, abc  , ab  , bc, a, bb, ac, abc , cb,  ac  , bb')

export {}