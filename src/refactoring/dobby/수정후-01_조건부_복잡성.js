const animalEmojiCollection = {
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
  if (!(animal in animalEmojiCollection)) {
    return "no animal";
  }
  return animalEmojiCollection[animal];
};

console.log(getAnimalEmoji("dragon"));

// ======================================

const myAnimalList = ["dog", "cat"];

const printMyAnimal = (animal) => {
  if (!myAnimalList.includes(animal)) {
    console.log(`${animal} is not my animal`);
  }

  console.log(`I have a ${animal}`);
};

console.log(printMyAnimal("dog"));

// ======================================

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

// ======================================

const fruitsCollectionByColor = {
  red: ["apple", "strawberry"],
  yellow: ["banana", "pineapple"],
  purple: ["grape", "plum"],
};

const printFruits = (color) => {
  if (!(color in fruitsCollectionByColor)) {
    return [];
  }
  return fruitsCollectionByColor[color];
};

console.log(printFruits(null));
console.log(printFruits("yellow"));

// ======================================

const printVegetableName = (vegetable) => {
  if (!vegetable?.name) {
    console.log("unknown");
    return;
  }
  console.log(vegetable.name);
};

printVegetableName(undefined);
printVegetableName({});
printVegetableName({ name: "cabbage", quantity: 2 });
// ======================================

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

const phoneNumber = car?.manufacturer?.phoneNumber ?? "no phone number";

console.log(model);
console.log(street);
console.log(phoneNumber);
// ======================================

const isManufacturerFromUSA = () => {
  if (car?.manufacturer?.address?.state === "USA") {
    console.log("true");
  }
};

console.log(isManufacturerFromUSA());
