const animals = {
  dog: "🐶",
  cat: "🐱",
  frog: "🐸",
  panda: "🐼",
  giraffe: "🦒",
  monkey: "🐵",
  unicorn: "🦄",
  dragon: "🐲",
};

const getAnimalEmoji = (animal) => {
  return animals[animal];
};

console.log(getAnimalEmoji("dragon"));

//////////////////////////////////////////////////////

const myAnimals = ["dog", "cat"];
const isMyAnimals = (animal) => myAnimals.includes(animal);

const printMyAnimal = (animal) => {
  if (isMyAnimals(animal)) {
    console.log(`I have a ${animal}`);
  }

  return "I don't have any animals.";
};

console.log(printMyAnimal("dog"));

//////////////////////////////////////////////////////

const getAnimalDetails = (animal) => {
  if (!animal) {
    return "No animal";
  }

  if (!animal.type) {
    return "No animal type";
  }

  if (!animal.name) {
    return "No animal name";
  }

  if (!animal.gender) {
    return "No animal gender";
  }

  return `${animal.name} is a ${animal.gender} ${animal.type}`;
};

console.log(getAnimalDetails());
console.log(getAnimalDetails({ type: "dog", gender: "female" }));
console.log(getAnimalDetails({ type: "dog", name: "Lucy" }));
console.log(getAnimalDetails({ type: "dog", name: "Lucy", gender: "female" }));

//////////////////////////////////////////////////////

const fruits = {
  red: ["apple", "strawberry"],
  yellow: ["banana", "pineapple"],
  purple: ["grape", "plum"],
};

const printFruits = (color) => {
  if (!color) {
    return [];
  }

  return fruits[color];
};
console.log(printFruits(null));
console.log(printFruits("yellow"));

//////////////////////////////////////////////////////

const printVegetableName = (vegetable) => {
  if (vegetable && vegetable.name) {
    console.log(vegetable.name);
  }

  return console.log("unknown");
};
printVegetableName(undefined);
printVegetableName({});
printVegetableName({ name: "cabbage", quantity: 2 });

//////////////////////////////////////////////////////
const car = {
  model: "Fiesta",
  manufacturer: {
    name: "Ford",
    address: {
      street: "Some Street Name",
      number: "5555",
      state: "USA",
    },
  },
};

const model = car?.model || "default model";

const street = car?.manufacturer?.address?.street || "default street";

const phoneNumber =
  car?.manufacturer?.address?.phoneNumber || "default phoneNumber";

console.log(model);
console.log(street);
console.log(phoneNumber);

//////////////////////////////////////////////////////

const isManufacturerFromUSA = () => {
  if (car?.manufacturer?.address?.street || "USA") {
    return console.log("true");
  }

  return "false";
};
console.log(isManufacturerFromUSA());
