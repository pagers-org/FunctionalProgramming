// FIXME: npm test /src/utils/unique.test.js

// 어떤 것을 해볼까요?
const unique = (arr, callback, isSorted) => {
  return arr;
};

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

    it('case: 3, Advanced', () => {
      const objects = [
        { x: 1, y: 2 },
        { x: 2, y: 1 },
        { x: 1, y: 2 },
      ];
      const uniqueObjects = unique(objects);

      expect(uniqueObjects).toEqual([
        { x: 1, y: 2 },
        { x: 2, y: 1 },
      ]);
    });
  });
});
