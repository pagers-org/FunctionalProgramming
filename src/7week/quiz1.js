import _ from './roy-utils.js'

/*
1. 랜덤한 숫자 배열에서 짝수위치는 더하고 홀수위치는 곱한 뒤에 (순서대로 누적)
2의 배수는 t: [...]에
3의 배수는 h: [...]에 추가한 뒤 객체로 반환해 주세요
ex) [5, 1, 3, 7, 8, 4, 2]
=> [5, 1, 15, 8, 120, 12, 240]
=> {
  t: [8, 120, 12, 240]
  h: [15, 120, 12, 240]
}
*/

const solve = values => _.pipe(
  _.pReduce((res, c, i) => {
    const prevValue = res.arr.at(-2)
    const currentValue = prevValue ? (_.odd(i + 1) ? c * prevValue : c + prevValue) : c;
    res.arr = [...res.arr.slice(-2), currentValue]
    if (_.even(currentValue)) res.t.push(currentValue)
    if (_.tripple(currentValue)) res.h.push(currentValue)
    return res;
  }, {
    arr: [],
    t: [],
    h: [],
  }),
  ({ t, h }) => ({ t, h }),
  _.logger(({ t, h }) => `input: [${values.join(', ')}]\nt: [${t.join(', ')}]\nh: [${h.join(', ')}]`)
)(values)

solve([5, 1, 3, 7, 8, 4, 2])
solve([1, 2, 3, 4, 5, 6, 7])

export {}