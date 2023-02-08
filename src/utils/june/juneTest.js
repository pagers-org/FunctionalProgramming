const { getMockData, timer } = require('../lib');
const { pipe, map, filter, take } = require('./util');

const users = getMockData();

timer.start();
const job = pipe(
  map(user => user.age),
  filter(age => age > 50),
  take(2),
);
job(users);
timer.end();

timer.start();
users
  .map(user => user.age)
  .filter(age => age > 50)
  .slice(2);
timer.end();
