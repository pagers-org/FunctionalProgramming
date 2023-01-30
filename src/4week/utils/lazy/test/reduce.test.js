const { reduce } = require('../reduce');
const { NL } = require('../../non-lazy');

describe('reduce 테스트', () => {
  describe('lazy', () => {
    it('case: 1, Advanced', () => {
      const decimalNumbers = [2.3, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 3.2, 2.6, 2.8];
      const addSum = reduce((acc, value) => acc + value);

      expect(addSum(decimalNumbers)).toEqual(NL.reduce(decimalNumbers, (acc, value) => acc + value));
    });

  });
});
