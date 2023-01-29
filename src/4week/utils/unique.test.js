// FIXME: npm test /src/utils/unique.test.js
const { unique } = require('../unique');

describe('unique 테스트', () => {
  describe('non-lazy', () => {
    it('case: 1, Normal', () => {
      const [firstArray, secondArray] = [
        [2, 1, 2],
        [1, 2, 1],
      ];
      const firstUniqueArray = unique(firstArray);
      const secondUniqueArray = unique(secondArray);

      expect(firstUniqueArray).toEqual([2, 1]);
      expect(secondUniqueArray).toEqual([1, 2]);
    });

    it('case: 2, Advanced', () => {
      const [firstArray, secondArray, thirdArray] = [
        [1, 2, 3],
        [1, 1, 2, 2, 3],
        [1, 2, 3, 3, 3, 3, 3],
      ];
      const firstUniqueArray = unique(firstArray, undefined, true);
      const secondUniqueArray = unique(secondArray, undefined, true);
      const thirdUniqueArray = unique(thirdArray, undefined, true);

      expect(firstUniqueArray).toEqual([1, 2, 3]);
      expect(secondUniqueArray).toEqual([1, 2, 3]);
      expect(thirdUniqueArray).toEqual([1, 2, 3]);
    });

    it('case: 3, arr is not iterable', () => {
      const errorObjects = unique({ a: 'a', b: 'b' });
      
      expect(errorObjects).toEqual([]);
    });
  });
});
