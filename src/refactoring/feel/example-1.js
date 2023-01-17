/*
  0. objectSet => setObject / var => const / function => arrow function
  1. 반복 코드부터 정의
  --- 여기까지 실습 때의 생각 흐름 ---
  2. 아직 존재하는 중복 코드 정리
  3. 사용 예시 추가
*/
const setObject = (object, name, key, value) => {
  const item = { ...object[name], [key]: value };
  const newObject = { ...object, [name]: item };

  return newObject;
};

const setPriceByName = (callback, cart, name, price) => {
  const newCart = callback(cart, name, 'price', price);

  return newCart;
};

const setShippingByName = (callback, cart, name, ship) => {
  const newCart = callback(cart, name, 'shipping', ship);

  return newCart;
};

const setQuantityByName = (callback, cart, name, quant) => {
  const newCart = callback(cart, name, 'quantity', quant);

  return newCart;
};

const setTaxByName = (callback, cart, name, tax) => {
  const newCart = callback(cart, name, 'tax', tax);

  return newCart;
};

// 사용 예시
// "오놀의 랜덤 요리"가 담긴 객체에서 "한식"에 대한 정보를 수정한다는 가정
const cart = {
  korean: {
    desc: '오늘 한식은 비빔밥',
  },
  japanese: {
    desc: '오늘 일식은 초밥',
  },
};

const cartAddedPrice = setPriceByName(setObject, cart, 'korean', 5000);
const cartAddedShipping = setShippingByName(setObject, cartAddedPrice, 'korean', '당일 배송');
const cartAddedQuantity = setQuantityByName(setObject, cartAddedShipping, 'korean', 50);
const cartAddedTax = setTaxByName(setObject, cartAddedQuantity, 'korean', 1000);

// { korean: { desc: '오늘 한식은 비빔밥' }, japanese: { desc: '오늘 일식은 초밥' } }
console.log(cart);
// {
//   korean: { desc: '오늘 한식은 비빔밥', price: 5000 },
//   japanese: { desc: '오늘 일식은 초밥' }
// }
console.log(cartAddedPrice);
// {
//   korean: { desc: '오늘 한식은 비빔밥', price: 5000, shipping: '당일 배송' },
//   japanese: { desc: '오늘 일식은 초밥' }
// }
console.log(cartAddedShipping);
// {
//   korean: { desc: '오늘 한식은 비빔밥', price: 5000, shipping: '당일 배송', quantity: 50 },
//   japanese: { desc: '오늘 일식은 초밥' }
// }
console.log(cartAddedQuantity);
// {
//   korean: {
//     desc: '오늘 한식은 비빔밥',
//     price: 5000,
//     shipping: '당일 배송',
//     quantity: 50,
//     tax: 1000
//   },
//   japanese: { desc: '오늘 일식은 초밥' }
// }
console.log(cartAddedTax);
