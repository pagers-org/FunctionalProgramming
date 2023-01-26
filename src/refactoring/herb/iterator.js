function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const iterator = range(1, 10);

function* skip(gen, skip) {
  let count = 0;
  for (let value of gen) {
    if (count === skip) {
      return;
    }
    yield value;
    count++;
  }
}

function* take(gen, n) {
  let count = 0;
  for (let value of gen) {
    if (count >= n) {
      return;
    }
    yield value;
    count++;
  }
}

const skipValue = skip(iterator, 2);

console.log(skipValue);
