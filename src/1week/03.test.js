const { multiDimensionalAccumulate } = require('./03.js');

describe('multiDimensionalAccumulate', () => {
  it('case: 1', () => {
    const multiDimensionalArr = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [9, 8, 7, 6, 5, 4, 3, 2, 1],
      [11, 12, 13, 14, 15, 16, 17, 18, 19],
      [19, 18, 17, 16, 15, 14, 13, 12, 11],
    ];
    expect(multiDimensionalAccumulate(multiDimensionalArr)).toBe(86);
  });
});
