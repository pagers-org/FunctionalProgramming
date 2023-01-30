// testUtils.js
const { func1 } = require('./index');

describe('tests', () => {
  test('func1', () => {
    const result = func1([1, 2, 3, 6]);
    expect(result).toEqual({ t: [2, 8], h: [3] });
  });
});