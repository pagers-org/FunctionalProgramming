const setObjectItemByName = (obj, name, item) => { 
  return objectSet(obj, name, item);
}
// 현재 이 필드가 유효한지 체크, 필드가 변경 가능하다

const setPriceByName = (cart, name, price) => setObjectItemByName(cart, name, setObjectItemByName(item, 'price', price));
  
const setShippingByName = (cart, name, ship) => setObjectItemByName(cart, name, setObjectItemByName(cart[name], 'shipping', ship));

function setQuantityByName(cart, name, quant) {
  var item = cart[name];
  var newItem = objectSet(item, 'quantity', quant);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

function setTaxByName(cart, name, tax) {
  var item = cart[name];
  var newItem = objectSet(item, 'tax', tax);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

function objectSet(object, key, value) {
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}
