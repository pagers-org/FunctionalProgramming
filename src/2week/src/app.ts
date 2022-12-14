let shoppingCart = []
let shoppingCartTotal = 0

const addItemToCart = item => {
  shoppingCart.push(item)
  console.log(shoppingCart)
  calculateCartTotal()
}

const calculateCartTotal = () => {
  shoppingCartTotal = 0
  for (let i = 0; i < shoppingCart.length; i++) {
    let item = shoppingCart[i]
    shoppingCartTotal += item.price
  }
  setCartTotalDOM()
  updateShippingIcons()
  updateTaxDOM()
}

const setCartTotalDOM = () => {
  document.querySelector('.total-price').textContent = shoppingCartTotal
}

const updateShippingIcons = () => {
  let buyButtons = getBuyButtonsDOM()
  for (let i = 0; i < buyButtons.length; i++) {
    let item = buyButtons[i]
    if (item.price + shoppingCartTotal >= 20) item.showFreeShoppingIcon()
    else item.hideFreeShoppingIcon()
  }
}

const getBuyButtonsDOM = () => {
  let buttons = []

  for (let i = 0; i < shoppingCart.length; i++) {
    let item = shoppingCart[i]
    item.showFreeShoppingIcon = () => {
      console.log('DOM 의 아이콘을 보여줍니다')
    }
    item.hideFreeShoppingIcon = () => {
      console.log('DOM 의 아이콘을 숨깁니다')
    }
    buttons.push(item)
  }
  return buttons
}

const updateTaxDOM = () => {
  setTaxDOM(shoppingCartTotal * 0.1)
}

const setTaxDOM = value => {
  document.querySelector('.total-price').textContent = value
}

document.querySelector('.items').addEventListener('click', ({ target }) => {
  if (target.localName !== 'button') return
  const parent = target.parentNode
  const name = parent.querySelector('.menu-name').textContent
  const category = parent.querySelector('.category').textContent
  const price = parseInt(parent.querySelector('.price').textContent.replace(/,/g, ''))
  addItemToCart({ name, category, price })
})
