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
  var item = cart[name];
  var newItem = objectSet(item, itemKey, itemValue);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}
const safe = (fn, checkIsSafeFn, resFn) => {
  return (...args) => {
    if (checkIsSafeFn(args)) {
      return fn(args);
    }
    return resFn(args);
  };
};
const safeAppendNewItemToCart = safe(
  appendNewItemToCart,
  (cart, name, itemKey) => {
    return cart[name] && Object.keys(cart[name]).includes(itemKey);
  },
  cart => ({ ...cart }),
);

function objectSet(object, key, value) {
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}
