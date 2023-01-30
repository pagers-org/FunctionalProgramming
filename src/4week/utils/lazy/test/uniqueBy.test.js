const { uniqueBy } = require('../uniqueBy');


describe('uniqueBy 테스트', () => {
  describe('lazy', () => {
    it('case: 1, Advanced', () => {
      const decimalNumbers = [2.3, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 3.2, 2.6, 2.8];
      const uniqueByFloor = uniqueBy(Math.floor);

      expect(uniqueByFloor(decimalNumbers)).toEqual();
    });

    it('case: 2, arr is not iterable', () => {
      const errorObjects = uniqueBy({ a: 'a', b: 'b' });
      
      expect(errorObjects).toEqual([]);
    });
  });
});
