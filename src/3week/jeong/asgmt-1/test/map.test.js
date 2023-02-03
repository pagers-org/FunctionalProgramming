const { _map } = require("../map.js");

describe("custom map", () => {
  it("callback 으로 넘기는 함수로 계산 후 새로운 배열을 반환한다.", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(_map(arr, (x) => x * 2)).toStrictEqual(arr.map((x) => x * 2));
  });
});
