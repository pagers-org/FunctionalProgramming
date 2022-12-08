function add(a, b) {
  return a + b;
}

function accumulate(arr) {
  let accumulator = 0;

  for (let i = 0; i < arr.length; i++) {
    accumulator = add(accumulator, arr[i]);
  }
  return accumulator;
}

exports.accumulate = accumulate;
