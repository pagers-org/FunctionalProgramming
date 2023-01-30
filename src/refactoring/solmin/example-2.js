var foodArr = [];
var usedDishArr = [];

function cookAndEat(food) {
  cook(food);
  eat(food);
}

function cleanDish(dish) {
  wash(dish);
  dry(dish);
  putAway(dish);
}

// result
function forEach(array, fn) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    fn(item);
  }
}

forEach(foodArr, cookAndEat);
forEach(usedDishArr, cleanDish);

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

// forEach를 만들어야함
// 기존 forEach
// var foodArr = [];

// cookAndEatFood(foodArr, cookAndEat);
// forEach(usedDishArr, cleanDish);
// function cookAndEatFood(array, fn) {
//   for (var i = 0; i < array.length; i++) {
//     var item = array[i];
//     fn(item);
//   }
// }

// var usedDishArr = [];

// clean(usedDishArr, cleanDish);

// function clean(array, fn) {
//   for (var i = 0; i < array.length; i++) {
//     var item = array[i];
//     fn(item);
//   }
// }

// function cleanDish(dish) {
//   wash(dish);
//   dry(dish);
//   putAway(dish);
// }
