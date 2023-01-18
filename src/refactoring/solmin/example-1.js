// function setPriceByName(cart, name, price) {
//   var item = cart[name];
//   var newItem = objectSet(item, "price", price);
//   var newCart = objectSet(cart, name, newItem);
//   return newCart;
// }

// function setShippingByName(cart, name, ship) {
//   var item = cart[name];
//   var newItem = objectSet(item, "shipping", ship);
//   var newCart = objectSet(cart, name, newItem);
//   return newCart;
// }

// function setQuantityByName(cart, name, quant) {
//   var item = cart[name];
//   var newItem = objectSet(item, "quantity", quant);
//   var newCart = objectSet(cart, name, newItem);
//   return newCart;
// }

// function setTaxByName(cart, name, tax) {
//   var item = cart[name];
//   var newItem = objectSet(item, "tax", tax);
//   var newCart = objectSet(cart, name, newItem);
//   return newCart;
// }

function setValueByName(cart, cartName, field, value) {
  const item = cart[cartName];
  const newItem = objectSet(item, field, value);
  const newCart = object(cart, cartName, newItem);
  return newCart;
}

function objectSet(object, key, value) {
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

cart = setValueByName(cart, "appleStore", "macbook", 1);

// 책에서는 사용하는 유저 입장에서 개발팀과 상의 없이 값을 추가하지 않아도 된다고하였으나 만일 합의되지 않은 필드명이 들어왔을때
function setValueByNameStrictVersion(cart, cartName, field, value) {
  const item = cart[cartName];
  const newItem = objectSet(item, field, value);
  const newCart = object(cart, cartName, newItem);
  return newCart;
}

function isSafeToAdd(safeFn, checkIsSafe, unSafeFn) {
  return function () {
    if (checkIsSafe()) {
      return safeFn();
    }
    return unSafeFn();
  };
}

const test = isSafeToAdd(
  setValueByNameStrictVersion,
  function (cart, cartName, field, value) {
    return cart.hasOwnProperty(cartName);
  },
  function (cart) {
    return cart;
  }
);
