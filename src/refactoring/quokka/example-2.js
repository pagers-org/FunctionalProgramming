const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    callback(item);
  }
};

forEach(foods, food => {
  cook(food);
  eat(food);
});

forEach(dishes, dish => {
  wash(dish);
  dry(dish);
  putAway(dish);
});
