/// <reference types="cypress" />

import {
  add,
  add_element_to_array,
  sum_array,
  get_raw_price,
} from "../../src/utils";
import {
  add_cart_item,
  get_cart_price,
  get_cart_price_list,
  calc_cart_total_price,
} from "../../src/app";

describe("Unit Test Application Code", function () {
  before(() => {
    // check if the import worked correctly
    expect(add, "add").to.be.a("function");
  });

  context("utils", function () {
    it("can add numbers", function () {
      expect(add(1, 2)).to.eq(3);
    });
    it("can add element to array", function () {
      expect(add_element_to_array([2], 2)).to.deep.eq([2, 2]);
    });
    it("can sum array", function () {
      expect(sum_array([1, 2, 3])).to.eq(6);
    });
  });

  context("cart item", function () {
    const items = [
      {
        name: "돌체 콜드 브루",
        category: "C",
        price: 3900,
      },
    ];
    const newItem = {
      name: "티라미수 크림 데니쉬",
      category: "D",
      price: 7200,
    };

    it("add_cart_item", function () {
      expect(add_cart_item(items, newItem)).to.deep.eq([...items, newItem]);
    });
    it("get_cart_price", function () {
      expect(get_cart_price(newItem)).to.deep.eq(7200);
    });
    it("get_cart_price_list", function () {
      expect(get_cart_price_list([...items, newItem])).to.deep.eq([3900, 7200]);
    });
    it("calc_cart_total_price", function () {
      expect(calc_cart_total_price([...items, newItem])).to.deep.eq(11100);
    });
    it("get_raw_price", function () {
      expect(get_raw_price("4,000원", "원")).to.equal(4000);
    });
  });
});
