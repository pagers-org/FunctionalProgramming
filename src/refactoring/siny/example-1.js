function setPriceByName(cart, name, price) {
  return safeAppendNewItemToCart(cart, name, 'price', price);
}

function setShippingByName(cart, name, ship) {
  return safeAppendNewItemToCart(cart, name, 'shipping', ship);
}

function setQuantityByName(cart, name, quant) {
  return safeAppendNewItemToCart(cart, name, 'quantity', quant);
}

function setTaxByName(cart, name, tax) {
  return safeAppendNewItemToCart(cart, name, 'tax', tax);
}

/**
 * cart 에 새로운 아이템을 포함하게 하는 cart 도메인에 속하는 메서드
 * */
function appendNewItemToCart(cart, name, itemKey, itemValue) {
  const item = cart[name];
  const newItem = objectSet(item, itemKey, itemValue);
  const newCart = objectSet(cart, name, newItem);
  return newCart;
}

/**
 * fn 받고 해당 fn을 실행할 때 받는 args 를 이용해서 실행할지 말지 결정하는 로직
 * */
const safe = (fn, shouldInvoke, returnBy) => {
  return (...args) => {
    if (shouldInvoke(...args)) {
      return fn(...args);
    }
    return returnBy(...args);
  };
};
const safeAppendNewItemToCart = safe(
  appendNewItemToCart,
  (carts, name, itemKey) => {
    return carts[name] && Object.keys(carts[name]).includes(itemKey);
  },
  carts => ({ ...carts }),
);

function objectSet(object, key, value) {
  const copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

module.exports = {
  setPriceByName,
  setQuantityByName,
  setTaxByName,
  setShippingByName,
  safeAppendNewItemToCart,
};
