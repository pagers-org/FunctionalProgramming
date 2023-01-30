const { _reduce } = require("../reduce.js");

describe("test custom _reduce fn", () => {
  test("_reduce works same as reduce() method", () => {
    const arr = [1, 2, 3, 4, 5];
    const fn = (total, num) => total + num;
    expect(_reduce(arr, fn, 0)).toStrictEqual(arr.reduce(fn, 0));
  });
});
