const { pipe } = require('../pipe');

describe('pipe()', () => {
  it('pipe에 들어가는 함수는 순차적으로 실행된다.', () => {
    const target = 30;
    const double = (x) => x * 2;
    const addOne = (x) => x + 1;
    
    expect(pipe(double, addOne)(target)).toEqual(addOne(double(target)));
  });
});