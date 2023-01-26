const { performance } = require("perf_hooks");
const Map = (iterator, f) => {
  let i = 0;
  for (let element of iterator) {
    f(i, element);
    ++i;
  }
};

const Filter = (array, f) => {
  const tmp = [];
  Map(array, (idx, value) => {
    if (f(idx, value)) {
      tmp.push(value);
    }
  });

  return tmp;
};

const Reduce = (array, f, initValue) => {
  const copyArray = array;
  let init = initValue ?? 0;
  Map(copyArray, (_, cur) => {
    init = f(init, cur);
  });

  return init;
};

const range = () => {};

const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

const t0 = performance.now();
console.log("---------------Map----------------");
Map(myIterable, (idx, value) => {
  console.log(`value : ${value}, index : ${idx}`);
});

console.log("---------------Filter----------------");
const iterFilteredArray = Filter(myIterable, (idx, value) => {
  if (value % 2 === 1) {
    return value;
  }
});
console.log(iterFilteredArray);

console.log("---------------Reduce----------------");
const iterReduce = Reduce(
  myIterable,
  (acc, cur) => {
    return acc + cur;
  },
  0
);

console.log(iterReduce);
const t1 = performance.now();
console.log(`Iterator Call to doSomething took ${t1 - t0} milliseconds.`);
