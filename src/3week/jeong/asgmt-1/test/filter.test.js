const { _filter } = require("../filter.js");

describe("test custom filter function", () => {
  test("get an array as a param and return only elements matching the conditional", () => {
    const arr = [1, 2, 3, 4, 5];
    const fn = (x) => x > 3;
    expect(_filter(arr, fn)).toStrictEqual(arr.filter(fn));
  });
});
