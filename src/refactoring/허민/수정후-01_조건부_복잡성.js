
console.log('----------------------------getAnimalEmoji-------------------------')
const getAnimalEmoji = animal => {
  const animalHash = {
    dog : '🐶',
    cat : '🐱',
    frog : '🐸',
    panda : '🐼',
    giraffe : '🦒',
    monkey : '🐵',
    unicorn : '🦄',
    dragon : '🐲'
  }

  return animalHash[animal];
};

console.log(getAnimalEmoji('dragon'));

console.log('----------------------------printMyAnimal-------------------------')
const printMyAnimal = animal => {
  if (typeof animal !== 'string') {
    return 'typeError!'; 
  }

  return `I have a ${animal}`
};
console.log(printMyAnimal('panda'));

console.log('----------------------------getAnimalDetails-------------------------')
const getAnimalDetails = animal => {
  if(!animal) {
    return 'No animal'
  }
  const properties = ['type','name','gender'];
  let returnMsg = `${animal.name} is a ${animal.gender} ${animal.type}`;
  properties.map((value) => {
    if(!animal.hasOwnProperty(value)) {
      returnMsg = `No animal  ${value}`;
    }
  })

  return returnMsg;
};
console.log(getAnimalDetails());
console.log(getAnimalDetails({ type: 'dog', gender: 'female' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy', gender: 'female' }));

console.log('----------------------------printFruits-------------------------')

const printFruits = color => {
  const fruitsHash = {
    red : ['apple','strawberry'],
    yellow : ['banana', 'pineapple'],
    purple : ['grape', 'plum'],
  }

  if(!fruitsHash.hasOwnProperty(color)) {
    return [];
  }

  return fruitsHash[color];
};
console.log(printFruits(null));
console.log(printFruits('yellow'));

console.log('----------------------------printVegetableName-------------------------')

const printVegetableName = vegetable => {
  if (vegetable && vegetable.hasOwnProperty('name')) {
    console.log(vegetable.name);
    return;
  } 
  console.log('unknown');
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

const carPropertyChecker = (object, property) => {
  if(!object) {
    return;
  }

  if(object.hasOwnProperty(property)){
    return object[property];
  }

  if(object.manufacturer.hasOwnProperty(property)){
    return object.manufacturer[property];
  }

  if(object.manufacturer.address.hasOwnProperty(property)){
    return object.manufacturer.address[property];
  }

  return `default ${property}`;
}

console.log(carPropertyChecker(car, 'model'));
console.log(carPropertyChecker(car, 'street'));
console.log(carPropertyChecker(car, 'number'));

console.log('----------------------------isManufacturerFromUSA-------------------------')

const isManufacturerFromUSA = () => {
  if (car && car.manufacturer && car.manufacturer.address && car.manufacturer.address.state === 'USA') {
    console.log('true');
  }
};
console.log(isManufacturerFromUSA());

