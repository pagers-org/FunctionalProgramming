const { L } = require('../_index');

describe('pipe 테스트', () => {
  describe('lazy', () => {
    it('case: 1, Advanced', () => {
      const targetArray = [1, 2, 3, 4, 5, 6, 7, 8];
      const mapFn = (x) => x * 3;
      const filterFn = (x) => x > 3;
      const reduceFn = (acc, x) => acc + x;

      const call = L.pipe(
        L.map(mapFn),
        L.filter(filterFn),
        L.reduce(reduceFn)
      );
      const MyResult = call(targetArray);
      const JSResult = targetArray.map(mapFn).filter(filterFn).reduce(reduceFn);

      expect(MyResult).toBe(JSResult);
    });

  });
});
