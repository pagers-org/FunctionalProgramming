function* map(array, callback) {
  for (const item of array) {
    yield callback(item);
  }
}

function* filter(array, callback) {
  for (const item of array) {
    if (callback(item)) {
      yield item;
    }
  }
}

function* reduce(array, callback, initialValue) {
  let newValue = initialValue;

  for (const item of array) {
    newValue = callback(newValue, item);
  }

  yield newValue;
}
