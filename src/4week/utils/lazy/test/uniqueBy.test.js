const { L } = require('../_index');
const { NL } = require('../../non-lazy/_index');

describe('uniqueBy 테스트', () => {
  describe('lazy', () => {
    it('case: 1, Advanced', () => {
      const decimalNumbers = [2.3, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 3.2, 2.6, 2.8];
      const uniqueByFloor = L.uniqueBy(Math.floor);

      expect(uniqueByFloor(decimalNumbers)).toEqual(NL.uniqueBy(decimalNumbers, Math.floor));
    });

  });
});
