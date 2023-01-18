const animalEmoji = {
  dog: '🐶',
  cat: '🐱',
  frog: '🐸',
  panda: '🐼',
  giraffe: '🦒',
  monkey: '🐵',
  unicorn: '🦄',
  dragon: '🐲',
};
console.log(animalEmoji.dragon);

const printMyAnimal = animal => {
  console.log(`I have a ${animal}`);
};
console.log(printMyAnimal('dog'));

const getAnimalDetails = animal => {
  if (!animal) return 'No animal';
  if (!animal.name) return 'No animal name';
  if (!animal.gender) return 'No animal gender';
  if (!animal.type) return 'No animal type';
  return `${animal.name} is a ${animal.gender} ${animal.type}`;
};
console.log(getAnimalDetails());
console.log(getAnimalDetails({ type: 'dog', gender: 'female' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy', gender: 'female' }));

const getFruits = color => {
  switch (color) {
    case 'red':
      return ['apple', 'strawberry'];
    case 'yellow':
      return ['banana', 'pineapple'];
    case 'purple':
      return ['grape', 'plum'];
    default:
      return [];
  }
};
console.log(getFruits(null));
console.log(getFruits('yellow'));

const printVegetableName = vegetable => {
  if (vegetable && vegetable.name) {
    console.log(vegetable.name);
  } else {
    console.log('unknown');
  }
};
printVegetableName(undefined);
printVegetableName({});
printVegetableName({ name: 'cabbage', quantity: 2 });

const address = {
  street: 'Some Street Name',
  number: '5555',
  state: 'USA',
};

const manufacturer = {
  name: 'Ford',
  address,
};

const car = {
  model: 'Fiesta',
  manufacturer,
};

const model = (car && car.model) || 'default model';

const street = (address && address.street) || 'default street';

const phoneNumber = manufacturer && manufacturer.address && manufacturer.phoneNumber;
console.log(model);
console.log(street);
console.log(phoneNumber);

const isManufacturerFromUSA = () => {
  if (address && address.state === 'USA') {
    console.log('true');
  }
};
console.log(isManufacturerFromUSA());
