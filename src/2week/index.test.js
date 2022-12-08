const { add_item_to_cart, calc_cart_total } = require("./index.js");
import { beforeEach, jest } from "node:test";
var shopping_cart = [];
var shopping_cart_total = 0;

// 1. spyOn() calc_cart_total () => .toHaveCalled(1)
// 2. jest.fn() => calc_cart_total() => 목킹을 해서 의미가 없도록 만든다.

const calcCartTotal = jest.beforeEach(() => {
  calcCartTotal.mockClear();
});

describe("addItemToCart", () => {
  it("case: prev", () => {
    expect(add_item_to_cart("apple", 1000)).toEqual(undefined);
  });

  // it("case: 2", () => {
  //   const words = [
  //     "PIECE",
  //     "FUNCTIONAL",
  //     "OF",
  //     "SENTENCE",
  //     "CAKE",
  //     "PERSPECTIVE",
  //   ];
  //   expect(convertToConditionalUpperCase(words)).toEqual([
  //     "piece",
  //     "FUNCTIONAL",
  //     "of",
  //     "SENTENCE",
  //     "cake",
  //     "PERSPECTIVE",
  //   ]);
  // });
});
