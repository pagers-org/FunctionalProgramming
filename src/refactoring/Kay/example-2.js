import { _forEach } from "./utils";

const foods = ["cake", "pizza", "ice", "rice"];
const dishes = ["red", "blue", "green"];

const cook = (item) => console.log(`${item} is cook`);
const eat = (item) => console.log(`${item} is good`);
const wash = (item) => console.log(`${item} is clean`);
const dry = (item) => console.log(`${item} is dry`);
const putAway = (item) => console.log(`${item} is put`);

_forEach(foods, (food) => {
  if (foods.length === 0) throw new Error("food is not enough");
  cook(food);
  eat(food);
});

_forEach(dishes, (dish) => {
  if (foods.length === 0) throw new Error("dish is not enough");
  wash(dish);
  dry(dish);
  putAway(dish);
});
