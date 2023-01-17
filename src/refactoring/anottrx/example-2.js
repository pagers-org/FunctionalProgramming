const cookEat = (food) => {
  cook(food);
  eat(food);
}

const washDryPutAway = (dish) => {
  wash(dish);
  dry(dish);
  putAway(dish);
}

const foreach = (array, f) => {
  for(let i=0; i<array.length; i++) {
    const item = array[i];
    f(item);
  }
}

foreach(foods, cookEat);
foreach(dishes, washDryPutAway);
