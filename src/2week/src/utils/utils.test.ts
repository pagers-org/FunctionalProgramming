import  { stringToNumber, sum } from './utils';

describe('utils test', () => {
  test('stringToNumber', () => {
    expect(stringToNumber('5000원')).toEqual(5000);
  });

  test('sum', () => {
    expect(sum(500,500)).toEqual(1000);
  });

  test('1 is 1', () => {
    expect(1).toBe(1);
  });
});
