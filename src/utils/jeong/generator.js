function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
// const ge = generator();
// ge.next(); // { value: 1, done: false }
// ge.next(); // { value: 2, done: false }
// ge.next(); // { value: 3, done: false }
// ge.next(); // { value: undefined, done: true }
// ge.next(); // { value: undefined, done: true }
// ge.next(); // { value: undefined, done: true }

// map
function* map(gen, fn) {
  for (const value of gen()) {
    yield fn(value);
  }
}

// filter
function* filter(gen, fn) {
  for (const value of gen()) {
    if (fn(value)) yield value;
  }
}
// take
function* take(gen, n) {
  let count = 0;
  for (const value of gen()) {
    count++;
    if (count === n) return;
    yield value;
  }
}

const g = generator();
const g2 = map(generator, (x) => x * 3);
const g3 = filter(generator, (x) => x > 5);
const g4 = take(generator, 2);

console.log([...g], [...g2], [...g3], [...g4]); // [1, 2, 3]
