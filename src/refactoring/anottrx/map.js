const nums = [1, 2, 3];
const multi = (num) => num * 2;

const map = (array, f) => {
  let result = [];
  for(let i=0; i<array.length; i++) {
    const item = array[i];
    result = [...result, f(item)];
  }
  return result;
}

const result = map(nums, multi);
console.log(result);
