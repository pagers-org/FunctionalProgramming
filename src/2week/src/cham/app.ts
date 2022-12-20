// 데이터
type Item = {
  name: string;
  category: string;
  price: number;
}

let shoppingCart: Item[] = [];

// 계산
const addCart = (cart: Item[], item: Item) => {
  return [...cart, item]
}

const getTotalPrice = (cart: Item[]) => {
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price
  }
  return total
}

const createItem = (name: string, category: string, price: number) => ({
  name,
  category,
  price,
})

const getTax = (total: number) => total * 0.1;

const isFreeShopping = (price: number, total: number) => price + total >= 2000;

// 액션
const setCartTotalDOM = (total: number) => {
  document.querySelector('.total-price').textContent = total
}

const updateShippingIcons = (cart: Item[], total: number) => {
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i]
    if (isFreeShopping(item.price, total)) showFreeShoppingIcon(item)
    else hideFreeShoppingIcon(item)
  }
}

const changeItemTextColor = (item: Item, color: string) => {
  const items = Array.from(document.querySelectorAll('.menu-name'))
  const $item = items.find(el => el.textContent === item.name)
  if ($item) $item.style.color = color
}

const showFreeShoppingIcon = (item: Item) => {
  changeItemTextColor(item, 'green')
}

const hideFreeShoppingIcon = (item: Item) => {
  changeItemTextColor(item, 'inherit')
}

const setTaxDOM = (total: number) => {
  document.querySelector('.total-price').textContent = getTax(total)
}

const saveCart = (cart: Item[]) => {
  shoppingCart = cart
}

document.querySelector('.items').addEventListener('click', ({ target }) => {
  if (target.localName !== 'button') return
  const parent = target.parentNode
  const name = parent.querySelector('.menu-name').textContent
  const category = parent.querySelector('.category').textContent
  const price = parseInt(parent.querySelector('.price').textContent.replace(/,/g, ''))
  const item = createItem(name, category, price)
  const newCart = addCart(shoppingCart, item)
  const newTotal = getTotalPrice(newCart)

  saveCart(newCart);
  updateShippingIcons(newCart, newTotal)
  setCartTotalDOM(newTotal)
  setTaxDOM(newTotal)
})

