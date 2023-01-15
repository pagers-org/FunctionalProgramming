const nums = [1, 2, 3];
const isOver = (num) => num >= 2;

const filter = (array, f) => {
  let result = [];
  for(let i=0; i<array.length; i++) {
    const item = array[i];
    if(f(item)) result = [...result, item];
  }
  return result;
}

const result = filter(nums, isOver);
console.log(result);