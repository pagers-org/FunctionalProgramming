const { timer, getMockData } = require('./lib');
const { L } = require('./lazy/_index');

const users = getMockData();

timer.start();
const job = L.pipe(
  L.map(user => user.age),
  L.filter(age => age > 50),
);
const test = job(users);
timer.end();

console.log(test.next());
console.log(test.next());
console.log(test.next());

timer.start();
users
  .map(user => user.age)
  .filter(age => age > 50)
  .slice(2);
timer.end();
