// 데이터
let shoppingCart = []
const TAX_RATE = 0.1
const setShoppingCart = newShoppingCart => {
  shoppingCart = newShoppingCart
}

// 클릭 액션
document.querySelectorAll("button").forEach(button =>
  button.addEventListener("click", ({ target }) => {
    const name = target.parentNode.querySelector(".menu-name").textContent
    const category = target.parentNode.querySelector(".category").textContent
    const price = target.parentNode.querySelector(".price").textContent

    const newCart = addItemToCart({ name, category, price })
    setShoppingCart(newCart)
    const cartTotalPrice = calcCartTotal(newCart)

    handleDomUpdate(newCart, cartTotalPrice)
  })
)

const addItemOnArray = (array, item) => [...array, item]
const getTotalFromArray = (array, element) => array.reduce((acc, cur) => acc + cur[`${element}`], 0)
const updateTax = price => price * TAX_RATE
const updateTaxDom = shoppingCartTotal => setTaxDom(updateTax(shoppingCartTotal))
const addItemToCart = cartItem => addItemOnArray(shoppingCart, cartItem)
const calcCartTotal = shoppingCart => getTotalFromArray(shoppingCart, "price")

const addShowOrHideShoppingIconOnArray = array =>
  array.map(item => ({
    ...item,
    showFreeShoppingIcon: () => {
      console.log("DOM 의 아이콘을 보여줍니다")
    },
    hideFreeShoppingIcon: () => {
      console.log("DOM 의 아이콘을 숨깁니다")
    },
  }))

const handleDomUpdate = (shoppingCart, shoppingCartPriceTotal) => {
  setCartTotalDom(shoppingCartPriceTotal)
  const buyButtons = addShowOrHideShoppingIconOnArray(shoppingCart)

  updateShippingIcons(buyButtons, shoppingCartPriceTotal)
  updateTaxDom(shoppingCartPriceTotal)
}

const updateShippingIcons = (buyButtons, shoppingCartPriceTotal) => {
  buyButtons.forEach(buyButton => {
    if (buyButton.price + shoppingCartPriceTotal >= 20) {
      buyButton.showFreeShoppingIcon()
    } else {
      buyButton.hideFreeShoppingIcon()
    }
  })
}

// dom을 변경하는 로직
const setTaxDom = tax => {
  document.querySelector(".total-price").textContent = tax
}
const setCartTotalDom = shoppingCartTotal => {
  document.querySelector(".total-price").textContent = shoppingCartTotal
}
