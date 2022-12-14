import productsData from './products.json'
import { Product } from './types'

const renderProducts = (): Product[] => {
  const products = productsData.map(prod => {
    const elem = document.createElement('div')
    elem.className = 'item'
    elem.insertAdjacentHTML('beforeend', `
  <img src=${prod.src} width="200" height="200" alt="item" />
  <h2><em class="category">${prod.category}</em><span class="menu-name">${prod.name}</span></h2>
  <p>가격: <span class="price">${prod.price.toLocaleString('ko-KR')}원</span></p>
  <div class="info">
    <button class="add-to-cart" type="button">장바구니에 담기</button>
    <span class="free-shipping">배송비무료</span>
  </div>
    `)
    return {
      ...prod,
      elem,
    }
  })

  const $items = document.querySelector('.items') as HTMLElement
  $items.replaceChildren()
  $items.append(...products.map(prod => prod.elem))
  document.querySelector('.clear')!.textContent = '장바구니 비우기'
  return products
}

export default renderProducts