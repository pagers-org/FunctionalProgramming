const cookAndEat = (obj, ...func) => {
  const foods = obj;
  const [cook, eat] = func;

  for (let i = 0; i < foods.length; i++) {
    let food = foods[i];
    const dish = cook(food);
    return empty_foods;
  }
};

for (var i = 0; i < dishes.length; i++) {
  var dish = dishes[i];
  wash(dish);
  dry(dish);
  putAway(dish);
}

//

const customMap = (arr, func) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    newArr.push(func(el));
  }

  return newArr;
};

const customFilter = (arr, func) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (func(el)) {
      newArr.push(el);
    }
  }

  return newArr;
};

const customReduce = (arr, func) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (func(el)) {
      newArr.push(el);
    }
  }

  return newArr;
};
