const { getAnimalDetails, printFruits, printVegetableName, model, street } = require('./수정후-01_조건부_복잡성');

test('test getAniamlDetails', () => {
  expect(getAnimalDetails({ type: 'dog', name: 'Lucy', gender: 'female' })).toBe('Lucy is a female dog');
});

test('tests Fruits', () => {
  expect(printFruits(null)).toStrictEqual([]);
  expect(printFruits('yellow')).toStrictEqual(['banana', 'pineapple']);
});

test('tests Vegetable', () => {
  expect(printVegetableName(undefined)).toStrictEqual('unknown');
  expect(printVegetableName({})).toStrictEqual('unknown');
  expect(printVegetableName({ name: 'cabbage', quantity: 2 })).toStrictEqual('cabbage');
});

test('test Model', () => {
  expect(model).toBe('Fiesta');
  expect(street).toBe('Some Street Name');
});
