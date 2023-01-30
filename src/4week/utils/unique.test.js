// FIXME: npm test /src/utils/unique.test.js
const {I} = require('../internal_utils');

// 어떤 것을 해볼까요?
const unique = (arr, callback, isSorted) => {
  if (!I.isIterable(arr)) {
    return [];
  }
  const map = new Map();
  return arr.reduce((acc, item) => {
    let key;
    // Object인 경우
    if (!Array.isArray(item)) {
      key = JSON.stringify(item);
    }
    // callback이 있는 경우
    if (typeof callback === 'function') {
      key = callback(item);
    }

    if (!map.has(key)) {
      acc.push(item);
    }
    map.set(key, item);

    return acc;
  }, []);
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

    it('case: 4, arr is not iterable', () => {
      const errorObjects = unique({ a: 'a', b: 'b' });
      
      expect(errorObjects).toEqual([]);
    });
  });
});
