for (var i = 0; i < foods.length; i++) {
  var food = foods[i];
  cook(food);
  eat(food);
}

for (var i = 0; i < dishes.length; i++) {
  var dish = dishes[i];
  wash(dish);
  dry(dish);
  putAway(dish);
}


// foods, dishes 와 함께 key를 배열을 받아서 반복문을 도는 액션이 하나 필요하겠다. 
  // key를 가지고 분기를 통해 해당 배열이 수행해야할 비즈니스로직을 묶은 액션을 수행하면 되겠다.

