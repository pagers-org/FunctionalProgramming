const { filter, map, reduce, forEach } = require("./dodash.js");

const LIST = ["사과", "배", "당근", "오이", "옥수수"];

describe("dodash test", () => {
  it("forEach 테스트", () => {
    const answerList = [];
    const callbackFunction = (item, index) => answerList.push(item);
    forEach(LIST, callbackFunction);
    expect(answerList).toEqual(LIST);
  });

  it("map 테스트", () => {
    const callbackFunction = (item, index) => item;

    expect(map(LIST, callbackFunction)).toEqual(LIST);
  });

  it("filter 테스트", () => {
    const callbackFunction = (item, index) => index % 2 === 0;

    expect(filter(LIST, callbackFunction)).toEqual(["사과", "당근", "옥수수"]);
  });

  it("reduce 테스트", () => {
    const numberList = [1, 2, 3, 4, 5, 6, 7];
    const callbackFunction = (acc, cur, index) => acc + cur;

    expect(reduce(numberList, callbackFunction, 0)).toBe(28);
  });
});
