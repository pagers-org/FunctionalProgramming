const nums = [1, 2, 3];
const add = (a, b) => a + b;

const reduce = (array, init, f) => {
  let acc = init;
  for(let i=0; i<array.length; i++) {
    const item = array[i];
    acc = f(item, acc);
  }
  return acc;
}

const result = reduce(nums, 0, add);
console.log(result);
