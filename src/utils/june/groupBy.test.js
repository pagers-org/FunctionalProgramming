// FIXME: npm test /src/utils/groupBy.test.js

const { _groupBy } = require('./util');

describe('groupBy 테스트', () => {
  describe('non-lazy', () => {
    it('case: 1, Normal', () => {
      const array = [6.1, 4.2, 6.3];
      const grouped = _groupBy(array, Math.floor);

      expect(grouped).toEqual({ 4: [4.2], 6: [6.1, 6.3] });
    });

    it('case: 2, Advanced', () => {
      const array = [
        [1, 'a'],
        [2, 'a'],
        [2, 'b'],
      ];

      // 두 번째 인자가 index
      const [groupedFirstIndex, groupedSecondIndex] = [
        _groupBy(array, item => item[0]),
        _groupBy(array, item => item[1]),
      ];

      expect(groupedFirstIndex).toEqual({
        1: [[1, 'a']],
        2: [
          [2, 'a'],
          [2, 'b'],
        ],
      });

      expect(groupedSecondIndex).toEqual({
        a: [
          [1, 'a'],
          [2, 'a'],
        ],
        b: [[2, 'b']],
      });
    });

    it('case: 3, Advanced', () => {
      const grouped = _groupBy({ a: 6.1, b: 4.2, c: 6.3 }, Math.floor);

      expect(grouped).toEqual({ 4: [4.2], 6: [6.1, 6.3] });
    });
  });

  describe('lazy', () => {
    // 여기에 Lazy 테스트 코드를 작성해보자!!!
  });
});
