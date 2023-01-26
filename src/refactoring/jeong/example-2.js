// //기존 코드
// for (var i = 0; i < foods.length; i++) {
//   var food = foods[i];
//   cook(food);
//   eat(food);
// }

// for (var i = 0; i < dishes.length; i++) {
//   var dish = dishes[i];
//   wash(dish);
//   dry(dish);
//   putAway(dish);
// }

// //리팩토링 1단계: 암묵적 인자 명시적으로 바꾸기
// const cookAndEatArray = (arr) => {
//   for (var i = 0; i < arr.length; i++) {
//     var item = arr[i];
//     cookAndEatFood(item);
//   }
// };
// const cookAndEat = (food) => {
//   cook(food);
//   eat(food);
// };
// cookAndEatArray(foods);

// const cleanArray = (arr) => {
//   for (var i = 0; i < arr.length; i++) {
//     var item = arr[i];
//     cleanDishes(item);
//   }
// };
// const cleanDishes = (dish) => {
//   wash(dish);
//   dry(dish);
//   putAway(dish);
// };
// cleanArray(dishes);

// 리팩토링 2단계: 비슷하지만 완전히 같게 작동하지는 함수들을 처리하기 위해 함수를 인자로 받기(고차함수로 만들기)
const forEach = (arr, f) => {
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    f(item);
  }
};
const cookAndEat = (food) => {
  cook(food);
  eat(food);
};
const clean = (dish) => {
  wash(dish);
  dry(dish);
  putAway(dish);
};

forEach(foods, cookAndEat);
forEach(dishes, clean);
