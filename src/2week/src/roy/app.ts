type CartItem = {
  name: string;
  category: string;
  price: number;
}
type Product = CartItem & {
  elem: HTMLElement;
}

const shoppingCart: CartItem[] = []

const products: Product[] = Array.from(document.querySelector('.items')?.children ?? []).map(elem => {
  const name = elem.querySelector('.menu-name')?.textContent ?? ''
  const category = elem.querySelector('.category')?.textContent ?? ''
  const price = parseInt((elem.querySelector('.price')?.textContent ?? '').replace(/,/g, ''))
  return { name, category, price, elem: elem as HTMLElement }
})

const isFreeShipping = (product: Product, total: number) => product.price + total >= 20000
const getCartTotal = () => shoppingCart.reduce((res, item) => res + item.price, 0)
const updateDOM = () => {
  const cartTotal = getCartTotal()
  document.querySelector('.total-price')!.textContent = String(cartTotal)
  document.querySelector('.total-tax')!.textContent = String(cartTotal * 0.1)
  products.forEach(product => {
    if (product.elem) {
      product.elem.style.backgroundColor = isFreeShipping(product, cartTotal) ? 'yellow' : 'white';
    }
  })
}
const addItemToCart = (item: CartItem) => {
  shoppingCart.push(item)
  updateDOM()
}

document.querySelector('.items')!.addEventListener('click', e => {
  const tg = e.target as HTMLElement;
  if (tg.localName !== 'button') return
  const parent = tg.parentNode as HTMLElement;
  const product = products.find(p => p.elem === parent)
  if (product) {
    addItemToCart({ name: product.name, category: product.category, price: product.price })
  }
})

export {
  addItemToCart,
}
