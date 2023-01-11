import { isOver } from './logic';

describe('logics test', () => {
  test('isOver', () => {
    expect(isOver(25000)).toEqual(true);
  });


});
