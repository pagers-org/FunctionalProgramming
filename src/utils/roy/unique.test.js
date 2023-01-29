import { it, describe, expect } from 'vitest'

const toJSON = obj => JSON.stringify(obj)
const _self = x => x;
const _normalCompare = (a, b, order = 1) => (a - b) * order
const _localeCompare = (a, b, order = 1) => (a.localeCompare(b)) * order
const sortFnBuilder = (comparator, fn, order) => (a, b) => fn(comparator(a), comparator(b), order)

const unique = (arr, comparator = _self, sortFn) => {
  const newArr = [...arr]
  const initialValue = newArr.shift()
  const res = [initialValue]
  const compareMap = new Set([comparator(initialValue)])

  for(const item of arr) {
    const itemValue = comparator(item)
    if (!compareMap.has(itemValue)) {
      compareMap.add(itemValue)
      res.push(item)
    }
  }
  return sortFn ? res.sort(sortFn) : res
}

describe('unique 테스트', () => {
  it('case: 1, Normal', () => {
    expect(unique([3, 1, 2, 3, 2])).toEqual([3, 1, 2]);
    expect(unique([1, 3, 2, 2, 1])).toEqual([1, 3, 2]);
    expect(unique([3, 3, 2, 3, 3, 2, 1, 1, 1])).toEqual([3, 2, 1]);
  });

  it('case: 1, with sort', () => {
    expect(
      unique(
        [3, 1, 2, 3, 2],
        _self,
        sortFnBuilder(_self, _normalCompare, 1)
      )
    ).toEqual([1, 2, 3]);
    expect(
      unique(
        [1, 3, 2, 2, 1],
        _self,
        sortFnBuilder(_self, _normalCompare, -1)
      )
    ).toEqual([3, 2, 1]);
    expect(
      unique(
        [3, 3, 2, 3, 3, 2, 1, 1, 1],
        _self,
        sortFnBuilder(_self, _normalCompare, 1)
      )
    ).toEqual([1, 2, 3]);
  });

  it('case: 2, Advanced', () => {
    const source = [{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 2, y: 1 }]

    expect(
      unique(source, ({ x }) => x)
    ).toEqual([{ x: 1, y: 2 }, { x: 2, y: 1 }]);

    expect(
      unique(source, ({ x, y }) => `${x}_${y}`)
    ).toEqual([{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 3 }, { x: 2, y: 3 }]);

    expect(
      unique(source, toJSON)
    ).toEqual([{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 3 }, { x: 2, y: 3 }]);
  });

  it('case: 2, Advanced with sort', () => {
    const source = [{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 2, y: 1 }]

    const comparator1 = ({ x }) => x
    expect(
      unique(source, comparator1, sortFnBuilder(comparator1, _normalCompare, -1))
    ).toEqual([{ x: 2, y: 1 }, { x: 1, y: 2 }]);

    const comparator2 = ({ x, y }) => `${x}_${y}`
    expect(
      unique(source, comparator2, sortFnBuilder(comparator2, _localeCompare, 1))
    ).toEqual([{ x: 1, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 1 }, { x: 2, y: 3 }]);

    expect(
      unique(source, toJSON, sortFnBuilder(toJSON, _localeCompare, -1))
    ).toEqual([{ x: 2, y: 3 }, { x: 2, y: 1 }, { x: 1, y: 3 }, { x: 1, y: 2 }]);
  });
});
