let shoppingCart = [];
const $items = document.getElementsByClassName('item');

// 1. 계산을 꺼내기
// 2. 방어적 복사
// 3. 유틸리티, 스키마, 비지니스 로직

// 계산
const addItemToCart = (cart, item) => [...cart, item];
const getFreeShopping = (total, price) => total >= price;
const getPriceWithTax = total => Math.floor(total * 1.1);
const getTotalPrice = cart => cart.reduce((acc, item) => acc + item.price, 0);
const getBuyButtonsDom = cart =>
  cart.map(item => ({
    ...item,
    showFreeShoppingIcon,
    // 무료 배송의 초기 display가 none이고, 장바구니에서 덜어내는 기능이 없으므로
    // 구현하지 않음
    hideFreeShoppingIcon() {
      console.log('DOM 의 아이콘을 숨깁니다');
    },
  }));

function showFreeShoppingIcon(name) {
  for (const $item of $items) {
    const content = $item.querySelector('span').textContent;
    if (content === name) {
      $item.querySelector('.free').style.display = 'inline';
      break;
    }
  }
}

const setShopingCart = cart => {
  shoppingCart = cart;
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
    const cart = addItemToCart(shoppingCart, { name, category, price });
    setShopingCart(cart);
    calcCartTotal(cart);
  }),
);

const calcCartTotal = cart => {
  const total = getTotalPrice(cart);
  const priceWithTax = getPriceWithTax(total);
  setCartTotalDom(priceWithTax);
  updateShippingIcons(cart, total);
};

function setCartTotalDom(total) {
  document.querySelector('.total-price').textContent = total;
}

function updateShippingIcons(cart, total) {
  var buy_buttons = getBuyButtonsDom(cart);
  for (var i = 0; i < buy_buttons.length; i++) {
    var item = buy_buttons[i];
    if (getFreeShopping(total, 2000)) item.showFreeShoppingIcon(item.name);
    else item.hideFreeShoppingIcon();
  }
}
