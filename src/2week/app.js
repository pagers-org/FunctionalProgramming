/* eslint-disable prettier/prettier */
const to_원 = (num) =>
  new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(num);

var shopping_cart = [];
let buttons = [];

window.addEventListener('DOMContentLoaded', () => {
  const $buttons = getButtons();
  buttons = [...$buttons].map((button) =>
    getItemFromButtonDom({ target: button })
  );

  console.log('buttons: ', buttons);
});
//action
const getButtons = () => document.querySelectorAll('button');
// 계산
const getItemFromButtonDom = ({ target }) => {
  const name = target.parentNode.querySelector('.menu-name').textContent;
  const category = target.parentNode.querySelector('.category').textContent;
  const price = target.parentNode.querySelector('.price').textContent;
  return {
    name,
    price: parsePrice(price),
    category,
  };
};

getButtons().forEach((button) =>
  button.addEventListener('click', ({ target }) => {
    shopping_cart = add_item_to_cart({
      ...getItemFromButtonDom({ target }),
      carts: shopping_cart,
    });
    calc_cart_total(shopping_cart, buttons);
  })
);

//action
const calc_cart_total = (carts, theButtons) => {
  const total = _카트_총_가격(carts);
  set_cart_total_dom(total);
  update_shipping_icons(total, carts, theButtons);
  update_tax_dom(total);
};

//action
const set_cart_total_dom = (total) => {
  console.log({ total });
  document.querySelector('.total-price').textContent = to_원(total);
};

// action
const update_shipping_icons = (total, carts, theButtons) => {
  // dom이 있을 거라고 코드가 작성되어 있다. -> 횟수나, 시점에 의존한다. -> 액션이다.
  // 1. buttons -> dom ->
  var buy_buttons = get_buy_buttons_with_method(theButtons);

  console.log('update_shipping_icons : ', theButtons);

  showIconButtonIndexList(buy_buttons, total).forEach((i) => {
    console.log(i);
    buy_buttons[i].show_free_shopping_icon();
  });
  hideIconButtonIndexList(buy_buttons, total).forEach((i) => {
    buy_buttons[i].hide_free_shopping_icon();
  });
};

//calc
const get_buy_buttons_with_method = (buttons) => {
  const newButtons = [];
  for (var i = 0; i < buttons.length; i++) {
    var item = { ...buttons[i] };
    newButtons.push({
      item,
      show_free_shopping_icon: () => {
        console.log('DOM 의 아이콘을 보여줍니다');
      },
      hide_free_shopping_icon: () => {
        console.log('DOM 의 아이콘을 숨깁니다');
      },
    });
  }

  console.log('get_buy_buttons_dom : ', newButtons);
  return newButtons;
};

// action
const update_tax_dom = (aTotal) => {
  set_tax_dom(calc_tax(aTotal));
};

//action
const set_tax_dom = (value) => {
  document.querySelector('.tax').textContent = to_원(value);
};

///

/* eslint-disable prettier/prettier */

const parsePrice = (price) => Number(price.replace('원', '').replace(',', ''));

// 1,2 계산 -> 계산
const _카트_총_가격 = (cartList) => {
  let total = 0;
  for (var i = 0; i < cartList.length; i++) {
    var item = cartList[i];
    total += item.price;
  }
  return total;
};
//계산
const add_item_to_cart = ({ name, price, carts, category }) => [
  ...carts,
  {
    name: name,
    price: price,
    category: category,
  },
];

// 계산
const getButtonItemPrice = (button) => button.item.price;
const shouldShowIcon = (button, total) =>
  getButtonItemPrice(button) + total >= 20;
const showIconButtonIndexList = (buttons, total) =>
  buttons
    .map((button, index) => [button, index])
    .filter(([button, index]) => shouldShowIcon(button, total))
    .map(([button, index]) => index);

const hideIconButtonIndexList = (buttons, total) =>
  buttons
    .map((button, index) => [button, index])
    .filter(([button, index]) => !shouldShowIcon(button, total))
    .map(([button, index]) => index);

// 계산
const calc_tax = (aTotal) => aTotal * 0.1;
