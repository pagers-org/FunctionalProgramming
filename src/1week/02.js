function accumulate(arr) {
  let accumulator = 0;

  for (let i = 0; i < arr.length; i++) {
    accumulator += arr[i];
  }

  return accumulator;
}

exports.accumulate = accumulate;
