// 0. objectSet => setObject / var => const / function => arrow function

// 1. 반복 코드부터 정의
const setObject = (object, key, value) => ({ ...object, [key]: value });

const setPriceByName = (callback, cart, name, price) => {
  const item = cart[name];
  const newItem = callback(item, 'price', price);
  const newCart = callback(cart, name, newItem);
  return newCart;
};

const setShippingByName = (callback, cart, name, ship) => {
  const item = cart[name];
  const newItem = callback(item, 'shipping', ship);
  const newCart = callback(cart, name, newItem);
  return newCart;
};

const setQuantityByName = (cart, name, quant) => {
  const item = cart[name];
  const newItem = callback(item, 'quantity', quant);
  const newCart = callback(cart, name, newItem);
  return newCart;
};

const setTaxByName = (callback, cart, name, tax) => {
  const item = cart[name];
  const newItem = callback(item, 'tax', tax);
  const newCart = callback(cart, name, newItem);
  return newCart;
};

/*
휴먼에러 등으로 key가 없다면?
key를 변경해야 한다면?
*/
