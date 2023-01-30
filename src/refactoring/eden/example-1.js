function setPriceByName(cart, name, price) {
  var item = cart[name];
  var newItem = objectSet(item, 'price', price);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

function setShippingByName(cart, name, ship) {
  var item = cart[name];
  var newItem = objectSet(item, 'shipping', ship);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

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


// 리팩토링 사고의 흐름.
// 1. Price, Shippng, Quantity ... 등이 반복 됨 => 암묵적 입력 => 공통의 이름인 Key로 변경
// 2. 각 value의 경우에도 value라는 이름으로 변경
// 3. cart => object로 변경 가능할 듯. 

const setKeyByName = (object, name, Key, value) => {
  let item = object[name];
  let newItem = objectSet(item, Key, value);
  let newCart = objectSet(cart, name, newItem);
  return newCart;
}

// 요구사항
// 중복된 부분을 줄이기! 
// 이상한 필드가 있는 경우 에러처리가 됐으면 좋겠다
// 필드가 변경하고 싶은 경우에는 어떻게 해야할까? 

