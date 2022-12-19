var shopping_cart = [];
var shopping_cart_total = 0;
const $items = document.getElementsByClassName('item');

// 1. 계산을 꺼내기
// 2. 방어적 복사
// 3. 유틸리티, 스키마, 비지니스 로직

// 계산
const add_item_to_cart = (cart, item) => [...cart, item];
const getFreeShopping = (total, price) => total >= price;
const getPriceWithTax = total => Math.floor(total * 1.1);
const getTotalPrice = cart => cart.reduce((acc, item) => acc + item.price, 0);
const get_buy_buttons_dom = cart =>
  cart.map(item => ({
    ...item,
    show_free_shopping_icon,
    // 무료 배송의 초기 display가 none이고, 장바구니에서 덜어내는 기능이 없으므로
    // 구현하지 않음
    hide_free_shopping_icon() {
      console.log('DOM 의 아이콘을 숨깁니다');
    },
  }));

function show_free_shopping_icon(name) {
  for (const $item of $items) {
    const content = $item.querySelector('span').textContent;
    if (content === name) {
      $item.querySelector('.free').style.display = 'inline';
      break;
    }
  }
}

const setShopingCart = cart => {
  shopping_cart = cart;
};

const setInitialFree = () => {
  for (const $item of $items) {
    $item.querySelector('p').innerHTML += '<span class="free" style="display: none">(무료 배송)</span>';
  }
};

setInitialFree();

document.querySelectorAll('button').forEach(button =>
  button.addEventListener('click', ({ target }) => {
    const name = target.parentNode.querySelector('.menu-name').textContent;
    const category = target.parentNode.querySelector('.category').textContent;
    const price = Number(target.parentNode.querySelector('.price').textContent.replace('원', '').replace(',', ''));
    const cart = add_item_to_cart(shopping_cart, { name, category, price });
    setShopingCart(cart);
    console.log(cart);
    calc_cart_total(cart);
  }),
);

const calc_cart_total = cart => {
  const total = getTotalPrice(cart);
  const priceWithTax = getPriceWithTax(total);
  set_cart_total_dom(priceWithTax);
  update_shipping_icons(cart, total);
};

function set_cart_total_dom(total) {
  document.querySelector('.total-price').textContent = total;
}

function update_shipping_icons(cart, total) {
  var buy_buttons = get_buy_buttons_dom(cart);
  for (var i = 0; i < buy_buttons.length; i++) {
    var item = buy_buttons[i];
    console.log(item);
    console.log(total);
    if (getFreeShopping(total, 2000)) item.show_free_shopping_icon(item.name);
    else item.hide_free_shopping_icon();
  }
}

function set_tax_dom(value) {
  document.querySelector('.total-price').textContent = value;
}
