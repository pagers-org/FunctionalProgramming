const { map, filter, reduce } = require('./array');

describe('Map test', () => {
  it('callback으로 넘기는 함수로 계산 후 새로운 배열을 반환한다.', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(map(arr, value => value * 2)).toStrictEqual([2, 4, 6, 8, 10]);
  });
  it('반환된 배열과 원본 배열은 다르다.', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(map(arr, value => value * 2)).not.toBe(arr);
  });

  it('계산 후에도 이전 값은 변화가 없다.', () => {
    const beforeArray = [1, 2, 3, 4, 5];
    const targetArray = beforeArray;
    map(targetArray, value => value * 2);
    expect(targetArray).toStrictEqual(beforeArray);
  });
});

describe('Filter Test', () => {
  it('원소마다 callback을 실행해 truthy한 값을 리턴하는 원소만 새로운 배열에 포함시킨다.', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(filter(arr, value => value > 2)).toStrictEqual([3, 4, 5]);
  });
  it('반환된 배열과 원본 배열은 다르다.', () => {
    const arr = [1, 2, 3, 4, 5];
    const filteredArr = filter(arr, value => value * 2);
    expect(filteredArr).not.toBe(arr);
  });
  it('계산 후에도 이전 값은 변화가 없다.', () => {
    const beforeArray = [1, 2, 3, 4, 5];
    const targetArray = beforeArray;
    filter(targetArray, x => x * 2);
    expect(targetArray).toStrictEqual(beforeArray);
  });
});

describe('Reduce Test', () => {
  it('배열의 원소를 callback 인자로 사용하여 initialValue에 넘긴 값에 누적시켜 리턴한다 ', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(reduce(arr, (acc, cur) => acc + cur, 0)).toBe(15);
  });
  it('initialValue를 넘기지 않으면 배열의 첫번째 값을 사용한다', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(reduce(arr, (acc, cur) => acc + cur)).toBe(16);
  });
  it('배열이 비어있고 initialValue를 넘기지 않으면 에러를 throw한다.', () => {
    const arr = [];
    expect(() => {
      reduce(arr, (acc, cur) => acc + cur);
    }).toThrow('초기값없이');
  });
  it('계산 후에도 이전 값은 변화가 없다.', () => {
    const beforeArray = [1, 2, 3, 4, 5];
    const targetArray = beforeArray;
    reduce(targetArray, (acc, cur) => acc + cur);
    expect(targetArray).toStrictEqual(beforeArray);
  });
});
