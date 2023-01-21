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

// setByName이라는 함수로 추상화가 가능하겠군. 그리고 안에서 쓰이는 key를 같이 인자로 받아서 사용해야 겠다.

// 데이터 : 필요한 데이터는 cart, name, key, value가 되겠다. 

// 계산 : setByName이라는 비즈니스 로직 함수가 수행되고 

  // 계산 : 내부에서 objectSet이라는 계산이 수행되고 newItem를 리턴한다. 

  // 계산 : 내부에서 objectSet이라는 계산이 수행되고 newCart를 리턴한다. 

 // 데이터 : 새로운 장바구니를 반환한다.