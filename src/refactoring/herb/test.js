function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const iterator = range(1, 10);
const iterator2 = range(1, 10);

function take(n) {
  return function* (gen) {
    let count = 0;
    for (let value of gen) {
      if (count >= n) {
        return;
      }
      yield value;
      count++;
    }
  };
}

function* skip(gen, n) {
  let count = 0;
  for (let value of gen) {
    if (count !== n) yield value;
    count++;
  }
}

const Map = (iterator, f) => {
  let i = 0;
  for (let element of iterator) {
    f(i, element);
    ++i;
  }
};

const Reduce = (array, f, initValue) => {
  let init = initValue ?? 0;
  Map(array, (_, cur) => {
    init = f(init, cur);
  });

  return init;
};

function pipe(...fns) {
  return function (val) {
    return fns.reduce((res, fn) => fn(res), val);
  };
}

const operations = pipe(take(4), take(2), take(1))(iterator);

console.log([...operations]);
