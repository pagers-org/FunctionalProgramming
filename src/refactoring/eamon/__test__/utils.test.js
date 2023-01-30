const { _forEach, _map, _filter, _reduce } = require('../utils');

test('forEach', () => {
  const mockCallback = jest.fn();
  _forEach(mockCallback)([1, 2, 3, 4]);
  expect(mockCallback.mock.calls.length).toBe(4);
  expect(mockCallback.mock.calls[0][0]).toBe(1);
  expect(mockCallback.mock.calls[1][0]).toBe(2);
  expect(mockCallback.mock.calls[2][0]).toBe(3);
  expect(mockCallback.mock.calls[3][0]).toBe(4);
});

test('map', () => {
  const mockCallback = jest.fn(x => x * 2);
  const result = _map(mockCallback)([1, 2, 3, 4]);
  expect(result).toEqual([2, 4, 6, 8]);
});

test('filter', () => {
  const mockCallback = jest.fn(x => x > 2);
  const result = _filter(mockCallback)([1, 2, 3, 4]);
  expect(result).toEqual([3, 4]);
});

test('reduce', () => {
  const mockCallback = jest.fn((acc, i) => acc + i);
  const result = _reduce(mockCallback)([1, 2, 3, 4]);
  expect(result).toBe(10);

  const result2 = _reduce(mockCallback, 10)([1, 2, 3, 4]);
  expect(result2).toBe(20);
});
