function setPriceByName(cart, name, price) {
  const item = cart[name];
  const newItem = objectSet(item, "price", price);
  const newCart = objectSet(cart, name, newItem);
  return newCart;
}

function setShippingByName(cart, name, ship) {
  const item = cart[name];
  const newItem = objectSet(item, "shipping", ship);
  const newCart = objectSet(cart, name, newItem);
  return newCart;
}

function setQuantityByName(cart, name, quant) {
  const item = cart[name];
  const newItem = objectSet(item, "quantity", quant);
  const newCart = objectSet(cart, name, newItem);
  return newCart;
}

function setTaxByName(cart, name, tax) {
  const item = cart[name];
  const newItem = objectSet(item, "tax", tax);
  const newCart = objectSet(cart, name, newItem);
  return newCart;
}

function objectSet(object, key, value) {
  const copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}
