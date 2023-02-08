const { reduce } = require('../reduce');

describe('Array.prototype.reduce()', () => {
  it('배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환한다.', () => {
    expect(reduce([3, 3, 3], (a, b) => a + b, 1)).toEqual([3, 3, 3].reduce((a, b) => a + b, 1));
  });

  it('기존 배열을 건드리지 않고 새로운 배열을 반환한다.', () => {
    const beforeArray = [1, 2, 3, 4, 5];
    const targetArray = beforeArray;
    reduce(targetArray, (prev, cur) => prev + cur, 1)
    expect(targetArray).toStrictEqual(beforeArray);
  })

  it('이미 정의된 함수를 callback 함수로 사용할 수 있다.', () => {
    const arr = [
      [0, 1],
      [2, 3],
      [4, 5],
    ];
    const formatLogic = (accumulator, currentValue) => accumulator.concat(currentValue);
    expect(reduce(arr, formatLogic, [])).toStrictEqual(arr.reduce(formatLogic, []));
  });

  it('초기 값을 지정하지 않아도 정상 계산되어야 한다.', () => {
    expect(reduce([2, 2, 2], (a, b) => a * b)).toEqual([2, 2, 2].reduce((a, b) => a * b));
  });

  it('빈 배열을 초기 값 없이 사용할 경우 TypeError가 발생한다.', () => {
    expect(() => {
      reduce([], (value) => value)
    }).toThrow(TypeError);
  });
});