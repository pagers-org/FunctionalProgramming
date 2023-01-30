function setDataByName(data, name, key, value) {
  var item = cart[data];
  var newItem = objectSet(item, key, value);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

function setPriceByName(cart, name, price) {
  setDataByName(cart, name, 'price', price);
}

function setShippingByName(cart, name, ship) {
  setDataByName(cart, name, 'shipping', ship);
}

function setQuantityByName(cart, name, quant) {
  setDataByName(cart, name, 'quantity', quant);
}

function setTaxByName(cart, name, tax) {
  setDataByName(cart, name, 'tax', tax);
}

function objectSet(object, key, value) {
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}
