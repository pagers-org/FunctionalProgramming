const solution1 = require('./ps/solution1.js');
const solution2 = require('./ps/solution2.js');

describe('test1', () => {
  it('[5,1,3,7,8,4,2] => [5,1,15,8,120,12,240] =>{t:[8, 12, 120, 240],h:[12, 15, 120, 240]}', () => {
    expect(solution1([5, 1, 3, 7, 8, 4, 2])).toEqual({
      t: [8, 12, 120, 240],
      h: [12, 15, 120, 240],
    });
  });
});
describe('test2', () => {
  it(" 'as,a  sa a q , q w ,q   ,w ,  q,w'  =>['a  sa a q', 'as', 'q w', 'q', 'w']", () => {
    const str = 'as,a  sa a q , q w ,q   ,w ,  q,w';
    expect(solution2(str)).toEqual(['a  sa a q', 'as', 'q w', 'q', 'w']);
  });
  it("' a ,a,gg, gg,g, d,d, d '  =>['gg','a','d','g']", () => {
    const str = ' a ,a,gg, gg,g, d,d, d ';
    expect(solution2(str)).toEqual(['gg', 'a', 'd', 'g']);
  });
});
