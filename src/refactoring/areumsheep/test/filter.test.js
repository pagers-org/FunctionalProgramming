const { filter } = require('../filter');

describe('Array.prototype.filter()', () => {
  it('주어진 함수의 테스트를 통과하는 모든 요소를 모아서 반환한다.', () => {
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    expect(filter(words, (word => word.length > 6))).toStrictEqual(words.filter(word => word.length > 6));
  });

  it('기존 배열을 건드리지 않고 새로운 배열을 반환한다.', () => {
    const beforeWords = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    const targetWords = beforeWords;
    filter(targetWords, (word => word.length > 6));
    expect(targetWords).toStrictEqual(beforeWords);
  });

  it('이미 정의된 함수를 callback 함수로 사용할 수 있다.', () => {
    const arr = [
      { id: 15 },
      { id: -1 },
      { id: 0 },
      { id: 3 },
      { id: 12.2 },
      { },
      { id: null },
      { id: NaN },
      { id: 'undefined' }
    ];
    const filterByID = ({ id }) => id !== undefined && typeof (id) === 'number' && !isNaN(id);
    expect(filter(arr, filterByID)).toStrictEqual(arr.filter(filterByID));
  });
});