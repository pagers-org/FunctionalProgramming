const getAnimalEmoji = animal => {
  const animalMap = new Map();
  animalMap.set('dog', '🐶')
    .set('cat', '🐱')
    .set('frog', '🐸')
    .set('panda', '🐼')
    .set('giraffe', '🦒')
    .set('monkey', '🐵')
    .set('unicorn', '🦄')
    .set('dragon', '🐲');
  return animalMap.get(animal);
};
console.log(getAnimalEmoji('dragon'));

const printMyAnimal = animal => {
  if (animal === 'dog' || animal === 'cat') {
    console.log(`I have a ${animal}`);
  }
};
console.log(printMyAnimal('dog'));

const getAnimalDetails = animal => {
  if (animal?.name && animal.gender && animal.type) {
    return `${animal.name} is a ${animal.gender} ${animal.type}`;
  } 
  if (animal?.name && animal.type) {
    return 'No animal gender';
  }
  if (animal?.type) {
    return 'No animal name';
  } 
  if (animal) {
    return 'No animal type';
  } 
  return 'No animal';
};
console.log(getAnimalDetails());
console.log(getAnimalDetails({ type: 'dog', gender: 'female' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy', gender: 'female' }));

const printFruits = color => {
  if(color === 'red') {
    return ['apple', 'strawberry'];
  }
  if(color === 'yellow') {
    return ['banana', 'pineapple'];
  }
  if(color === 'purple') {
    return ['grape', 'plum'];
  }
  return [];
};
console.log(printFruits(null));
console.log(printFruits('yellow'));

const printVegetableName = vegetable => {
  if (vegetable?.name) {
    console.log(vegetable.name);
  } else {
    console.log('unknown');
  }
};
printVegetableName(undefined);
printVegetableName({});
printVegetableName({ name: 'cabbage', quantity: 2 });

const car = {
  model: 'Fiesta',
  manufacturer: {
    name: 'Ford',
    address: {
      street: 'Some Street Name',
      number: '5555',
      state: 'USA',
    },
  },
};

const model = (car?.model) || 'default model';

const street = (car?.manufacturer?.address?.street) || 'default street';

const phoneNumber = car?.manufacturer?.address && car.manufacturer?.phoneNumber;
console.log(model);
console.log(street);
console.log(phoneNumber);

const isManufacturerFromUSA = () => {
  if (car?.manufacturer?.address?.state === 'USA') {
    console.log('true');
  }
};
console.log(isManufacturerFromUSA());
