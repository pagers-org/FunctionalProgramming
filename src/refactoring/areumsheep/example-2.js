// for (var i = 0; i < items.length; i++) { } << 형태가 반복된다....??


const forEach = (items, logic) => {
  for (let i = 0; i < items.length; i++) {
    logic(items[i]);
  }
}

forEach(foods, (food) => {
  cook(food);
  eat(food);
});

forEach(dishes, (dish) => {
  wash(dish);
  dry(dish);
  putAway(dish);
});