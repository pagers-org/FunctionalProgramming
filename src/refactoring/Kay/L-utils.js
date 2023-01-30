// 지연평가가 되는 Util들 입니다.

function* _filter(array, callback) {
  const result = [];

  for (const item of array) {
    if (callback(item)) {
      result.push(item);

      yield result;
    }
  }
}

function* _map(array, callback) {
  const result = [];

  for (const item of array) {
    result.push(callback(item));
    yield result;
  }
}

function* _take(array, count) {
  for (let i = 0; i < count; i++) {
    yield array[i];
  }
}

function* _pipe(...fns) {
  let value;

  for (const fn of fns) {
    value = yield fn(value);
  }
}

const L = {
  _filter,
  _map,
  _pipe,
  _take,
};

module.exports = { L };
