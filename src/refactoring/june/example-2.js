// 1. loop가 중복해서 쓰이고 있다.
// 2. cook, eat, wash, dry, putAway등 데이터를 이용해 할 일에 집중할 수 있는 코드를 만들자

import { forEach } from './array';

const foods = ['pizza', 'chungkukzang', 'ramen'];
const dishes = ['main', 'size', 'personal'];

for (var i = 0; i < foods.length; i++) {
  var food = foods[i];
  cook(food);
  eat(food);
}

for (var j = 0; j < dishes.length; j++) {
  var dish = dishes[j];
  wash(dish);
  dry(dish);
  putAway(dish);
}
forEach(foods, food => {
  cook(food);
  eat(food);
});
forEach(dishes, dish => {
  wash(dish);
  dry(dish);
  putAway(dish);
});
