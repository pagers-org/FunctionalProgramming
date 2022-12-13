import {
  isShippingFree,
  isFreeShippingButton,
  filterFreeShippingButtons,
  filterPaidShippingButtons,
  getTax,
  getCartTotalPrice,
  addCartItem,
} from "./06_송상현";

describe("2주차 과제 테스트", () => {
  it("카트에 아이템 추가", () => {
    const previousCart = [{ name: "item1", price: 20 }];

    expect(addCartItem(previousCart, "item2", 30)).toStrictEqual([
      { name: "item1", price: 20 },
      { name: "item2", price: 30 },
    ]);
  });

  it("세금 계산", () => {
    expect(getTax(100)).toBe(10);
  });

  it("카트 전체 금액 계산", () => {
    const cart = [
      { name: "item1", price: 20 },
      { name: "item2", price: 30 },
    ];
    expect(getCartTotalPrice(cart)).toBe(50);
  });

  it("배송비가 무료다", () => {
    expect(isShippingFree(30)).toBe(true);
  });

  it("배송비가 유료다", () => {
    expect(isShippingFree(19)).toBe(false);
  });

  it("해당 버튼 상품은 무료 배송이다.", () => {
    const button = {
      item: {
        price: 10,
      },
    };
    expect(isFreeShippingButton(button, 10)).toBe(true);
  });

  it("해당 버튼 상품은 유료 배송이다.", () => {
    const button = {
      item: {
        price: 10,
      },
    };
    expect(isFreeShippingButton(button, 9)).toBe(false);
  });

  it("무료 배송 버튼 필터링", () => {
    const buttons = [
      {
        item: {
          price: 10,
        },
      },
      {
        item: {
          price: 15,
        },
      },
      {
        item: {
          price: 20,
        },
      },
    ];

    expect(filterFreeShippingButtons(buttons, 5)).toStrictEqual([
      {
        item: {
          price: 15,
        },
      },
      {
        item: {
          price: 20,
        },
      },
    ]);
  });

  it("유료 배송 버튼 필터링", () => {
    const buttons = [
      {
        item: {
          price: 10,
        },
      },
      {
        item: {
          price: 15,
        },
      },
      {
        item: {
          price: 20,
        },
      },
    ];

    expect(filterPaidShippingButtons(buttons, 5)).toStrictEqual([
      {
        item: {
          price: 10,
        },
      },
    ]);
  });
});
