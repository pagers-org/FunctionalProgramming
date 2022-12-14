const { lineFunction } = require('./01.js');

describe('lineFunction', () => {
  it('case: 1', () => {
    expect(lineFunction(2)).toBe(7);
  });
});
