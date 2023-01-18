// for (var i = 0; i < foods.length; i++) {
//  var food = foods[i];
//  cook(food);
//  eat(food);
// }

_forEach(foods, food => {
  cook(food);
  eat(food);
});

// for (var i = 0; i < dishes.length; i++) {
//  var dish = dishes[i];
//  wash(dish);
//  dry(dish);
//  putAway(dish);
// }

_forEach(dish, dish => {
  wash(dish);
  dry(dish);
  putAway(dish);
});

function _forEach(list) {
  return function (callback) {
    for (let index = 0; index < list.length; index++) {
      const item = list[index];
      callback(item, index);
    }
  };
}
