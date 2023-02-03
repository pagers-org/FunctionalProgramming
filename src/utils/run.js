const {
  // oldMap,
  // map,
  // oldFilter,
  // filter,
  oldReduce,
  reduce,
} = require('./func');
const { timer, getMockData } = require('./lib');

// timer.start();
// const a = map(getMockData(), v => v);
// timer.end();
//
// timer.start();
// const b = oldMap(getMockData(), v => v);
// timer.end();
//
// timer.start();
// const c = getMockData().map(v => v);
// timer.end();
//
// console.log(a.length, b.length, c.length);

// timer.start();
// const a = oldFilter(getMockData(), v => v.name.length < 5);
// timer.end();
//
// timer.start();
// const b = filter(getMockData(), v => v.name.length < 5);
// timer.end();
//
// console.log(a.length, b.length);

timer.start();
const a = oldReduce(getMockData(), acc => ++acc, 0);
timer.end();

timer.start();
const b = reduce(getMockData(), acc => ++acc, 0);
timer.end();

console.log(a, b);
