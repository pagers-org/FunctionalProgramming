// 주석을 달기
// 사고순서

// 논리 전개를 얘기해보기

// 4개의 함수를 보면 함수명, 내부에서는 변경하고자하는 필드명만 다르다.
// 4개의 함수가 하는 역할을 보면 특정한 필드값의 value를 변경하는것이기 때문에, 필드값과 value를 같이 받도록해서 함수를 하나로 선언해서 사용할 수 있다.

const setFieldByName = (cart, name, field, value) => {
  // 에러처리필요
  var item = cart[name];
  var newItem = objectSet(item, field, value);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
};

const objectSet = (object, key, value) => {
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
};

const cart = [];
const itemName = "item";

setFieldByName(cart, itemName, "price", 200);
setFieldByName(cart, itemName, "shipping", 200);
setFieldByName(cart, itemName, "quantity", 200);
setFieldByName(cart, itemName, "tax", 200);

// 요구사항 > 코드가 중복됨, 에러처리 추가되어야한다. 필드가 변경되어야할떄는 어떻게 해야하나?
