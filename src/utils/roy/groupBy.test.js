import { it, describe, expect } from 'vitest'

const groupBy = (obj, fn) => {
  const res = {}
  for(const [k, v] of Object.entries(obj)) {
    const groupKey = typeof fn === 'function' ? fn(v) : v[fn];
    res[groupKey] = [...(res[groupKey] || []), v]
  }
  return res;
};

describe('groupBy 테스트', () => {
  it('case: 1, Normal', () => {
    const array = [6.1, 4.2, 6.3];
    const grouped = groupBy(array, Math.floor);
    expect(grouped).toEqual({ 4: [4.2], 6: [6.1, 6.3] });
  });

  it('case: 2, Advanced', () => {
    const array = [[1, 'a'], [2, 'a'], [2, 'b']];

    // 두 번째 인자가 index
    expect(groupBy(array, 0)).toEqual({
      1: [[1, 'a']],
      2: [[2, 'a'], [2, 'b']],
    });
    expect(groupBy(array, 1)).toEqual({
      a: [[1, 'a'], [2, 'a']],
      b: [[2, 'b']],
    });
  });

  it('case: 3, Advanced', () => {
    expect(
      groupBy({ a: 6.1, b: 4.2, c: 6.3 }, Math.floor)
    ).toEqual({ 4: [4.2], 6: [6.1, 6.3] });

    expect(
      groupBy({ a: 3.6, b: 4.2, c: 5.3, d: 4.6 }, Math.round)
    ).toEqual({ 4: [3.6, 4.2], 5: [5.3, 4.6] });
  });
});
