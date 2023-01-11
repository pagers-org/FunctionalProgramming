import { isOver } from './logic';

describe('logics test', () => {
  test('25000이면 20000이 넘는다', () => {
    expect(isOver(25000)).toEqual(true);
  });

  test('15000이면 20000이 안 넘는다', () => {
    expect(isOver(15000)).toEqual(false);
  });
});
