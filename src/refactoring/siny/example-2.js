function cook(food) {}

function eat(food) {}
/**
 * fn args
 * item, index, items
 * */
function forEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, [...arr]);
  }
}

function foodWork(food) {
  cook(food);
  eat(food);
}
const foods = [];
forEach(foods, foodWork);

function wash(dish) {}

function dry(dish) {}

function putAway(dish) {}

function dishWork(dish) {
  wash(dish);
  dry(dish);
  putAway(dish);
}
const dishes = [];

forEach(dishes, dishWork);
