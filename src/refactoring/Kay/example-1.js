// cart와 name을 받아서 특정 값을 셋팅하는 구조로 작성된다는 사실 발견했습니다.
// 그래서 특정 값을 field와 value라는 값으로 받아서 셋팅하는 로직으로 변경을 했습니다.
// function 함수를 Arrow 함수로 변경한 이유는 this 값을 조작할 필요가 없기 때문에 변경 했습니다.

const setFieldByName = (cart, name, field, value) => {
  if (!!cart?.name) {
    return `You have don't name in cart`;
  }

  const item = cart[name];
  const newItem = objectSet(item, field, value);

  return objectSet(cart, name, newItem);
};

const setPriceByName = (cart, name, price) => {
  setFieldByName(cart, name, "price", price);
};

const setShippingByName = (cart, name, ship) => {
  setFieldByName(cart, name, "shipping", ship);
};

const setQuantityByName = (cart, name, quant) => {
  setFieldByName(cart, name, "quant", quant);
};

const setTaxByName = (cart, name, tax) => {
  setFieldByName(cart, name, "tax", tax);
};

const objectSet = (object, key, value) => {
  const copy = Object.assign({}, object);
  copy[key] = value;

  return copy;
};
