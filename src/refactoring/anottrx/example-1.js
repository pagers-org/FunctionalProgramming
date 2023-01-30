const cart = []

const setValueByName = (cart, name, value, key) => {
  // 이 필드가 유효한지 체크
  // 외부의 변경에 자유로운 인터페이스
  const item = cart[name];
  const newItem = objectSet(item, key, value);
  const newCart = objectSet(cart, name, newItem);
  return newCart;
}

const objectSet = (object, key, value) => {
  const copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}
