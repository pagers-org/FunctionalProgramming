const { map } = require('../map');

describe('Array.prototype.map()', () => {
  it('callback으로 넘기는 함수로 계산 후 새로운 배열을 반환한다.', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(map(arr, (x => x * 2))).toStrictEqual(arr.map(x => x * 2));
  });

  it('계산 후에도 이전 값은 변화가 없다.', () => {
    const beforeArray = [1, 2, 3, 4, 5];
    const targetArray = beforeArray;
    map(targetArray, (x => x * 2));
    expect(targetArray).toStrictEqual(beforeArray);
});

  it('이미 정의되어 있는 메서드를 callback 함수로 사용할 수 있다.', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(map(arr, Math.sqrt)).toStrictEqual(arr.map(Math.sqrt));
  });

  it('배열 속 객체를 재구성할 수 있다.', () => {
    const arr = [{ key: 1, value: 10 }, { key: 2, value: 20 }, { key: 3, value: 30 }];
    const reformatLogic = ({ key, value }) => {
      let tempObject = {};
      tempObject[key] = value;
      return tempObject;
    }
    expect(map(arr, reformatLogic)).toStrictEqual(arr.map(reformatLogic));
  });
});
