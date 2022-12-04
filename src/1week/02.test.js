const { accumulate } = require('./02.js');

describe('accumulate', () => {
  it('case: 1', () => {
    expect(accumulate([1, 2, 3, 4, 5])).toBe(15);
  });
});
