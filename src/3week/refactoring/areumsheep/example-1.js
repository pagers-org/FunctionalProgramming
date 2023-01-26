// 같은 형태의 함수가 반복되는 것으로 보여 field 라는 값을 받아 공통으로 작업하는 함수를 만들었습니다.

const setFieldByName = (cart, name, field, value) => {
  const item = cart[name];
  const newItem = objectSet(item, field, value);
  const newCart = objectSet(cart, name, newItem);
  return newCart;
}

const setPriceByName = (cart, name, price) => setFieldByName(cart, name, 'price', price)
const setShippingByName = (cart, name, ship) => setFieldByName(cart, name, 'shipping', ship);
const setQuantityByName = (cart, name, quant) => setFieldByName(cart, name, 'quantity', quant);
const setTaxByName = (cart, name, tax) => setFieldByName(cart, name, 'tax', tax);

function objectSet(object, key, value) {
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}
