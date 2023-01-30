// FIXME: npm test /src/utils/unique.test.js
const {I} = require('../internal_utils');

// 어떤 것을 해볼까요?
const uniqueBy = (arr, callback, isSorted) => {
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

describe('uniqueBy 테스트', () => {
  describe('non-lazy', () => {
    it('case: 1, Advanced', () => {
      const objects = [
        { x: 1, y: 2 },
        { x: 2, y: 1 },
        { x: 1, y: 2 },
      ];
      const uniqueObjects = uniqueBy(objects);

      expect(uniqueObjects).toEqual([
        { x: 1, y: 2 },
        { x: 2, y: 1 },
      ]);
    });

    it('case: 2, arr is not iterable', () => {
      const errorObjects = uniqueBy({ a: 'a', b: 'b' });
      
      expect(errorObjects).toEqual([]);
    });
  });
});
