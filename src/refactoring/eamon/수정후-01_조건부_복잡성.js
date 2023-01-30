const getAnimalEmoji = animal => {
  if (animal === 'dog') {
    return '🐶';
  }
  if (animal === 'cat') {
    return '🐱';
  }
  if (animal === 'frog') {
    return '🐸';
  }
  if (animal === 'panda') {
    return '🐼';
  }
  if (animal === 'giraffe') {
    return '🦒';
  }
  if (animal === 'monkey') {
    return '🐵';
  }
  if (animal === 'unicorn') {
    return '🦄';
  }
  if (animal === 'dragon') {
    return '🐲';
  }

  return 'unknown';
};
console.log(getAnimalEmoji('dragon'));

const printMyAnimal = animal => {
  if (animal !== 'dog' || animal !== 'cat') {
    return;
  }

  console.log(`I have a ${animal}`);
};
console.log(printMyAnimal('dog'));

const getAnimalDetails = animal => {
  let result;

  if (!animal) return 'No animal';

  if (!animal.type) return 'No animal type';
  if (!animal.name) return 'No animal name';
  if (!animal.gender) return 'No animal gender';

  result = `${animal.name} is a ${animal.gender} ${animal.type}`;

  return result;
};
console.log(getAnimalDetails());
console.log(getAnimalDetails({ type: 'dog', gender: 'female' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy', gender: 'female' }));

const printFruits = color => {
  const FRUITS = {
    red: ['apple', 'strawberry'],
    yellow: ['banana', 'pineapple'],
    purple: ['grape', 'plum'],
  };

  if (!color || FRUITS[color]) return [];

  return FRUITS[color];
};

console.log(printFruits(null));
console.log(printFruits('yellow'));

const printVegetableName = vegetable => {
  if (!vegetable || !vegetable.name) {
    console.log('unknown');
    return;
  }

  console.log(vegetable.name);
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

function getFieldValueInNestedObject(object, field) {
  if (!object) return `default ${field}`;
  const keys = Object.keys(object);

  if (keys.includes(field)) {
    return object[field];
  }

  for (const key of keys) {
    if (object[key] !== null && typeof object[key] === 'object') {
      const result = getFieldValueInNestedObject(object[key], field);
      if (result) return result;
    }
  }

  return `default ${field}`;
}

const model = getFieldValueInNestedObject(car, 'model');

const street = getFieldValueInNestedObject(car, 'street');

const phoneNumber = getFieldValueInNestedObject(car, 'phoneNumber');

console.log(model);
console.log(street);
console.log(phoneNumber);

const isManufacturerFromUSA = car => {
  if (getFieldValueInNestedObject(car, 'state') === 'USA') {
    console.log('true');
  }
};

console.log(isManufacturerFromUSA(car));
