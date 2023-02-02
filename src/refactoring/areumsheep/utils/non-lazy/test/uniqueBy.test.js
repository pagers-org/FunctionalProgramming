// FIXME: npm test /src/utils/unique.test.js
const { uniqueBy } = require('../uniqueBy');

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
