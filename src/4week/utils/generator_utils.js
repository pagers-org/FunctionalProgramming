const { timer, getMockData } = require('./lib');
const { map } = require('../3week/utils/map');

function* mapG(array = [], callback) {
  const result = [];

  for (const item of array) {
    result.push(callback(item));
    yield result;
  }
}

timer.start();
mapG(getMockData(), () => undefined);
timer.end();

timer.start();
map(getMockData(), () => undefined);
timer.end();

function* filter(array, callback) {
  const result = [];

  for (const item of array) {
    const condition = callback(item, ...array);
    if (condition) result.push(item);
    yield result;
  }
}

const testFilter = filter([1, 2, 3], (item) => item % 2 === 0);
console.log(testFilter.next());
console.log(testFilter.next());
console.log(testFilter.next());
console.log(testFilter.next());