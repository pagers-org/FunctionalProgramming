const { forEach } = require("./dodash");

const operateItemOfArray = (itemArr, ...cbArr) => {
  const operateItem = (item) => forEach(cbArr, (cb) => cb(item));
  forEach(itemArr, operateItem);
};

// AS_IS
for (let i = 0; i < foods.length; i++) {
  const food = foods[i];
  cook(food);
  eat(food);
}
// TO_BE
operateItemOfArray(foods, cook, eat);

// AS_IS
for (let i = 0; i < dishes.length; i++) {
  const dish = dishes[i];
  wash(dish);
  dry(dish);
  putAway(dish);
}

// TO_BE
operateItemOfArray(dishes, wash, dry, putAway);
