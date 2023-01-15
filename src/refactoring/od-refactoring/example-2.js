const foods = ["🍕", "🍔", "🥗"];
const cook = (food) => console.log(`${food} 요리하는 중...`);
const eat = (food) => console.log(`${food} 먹는 중...`);

const dishes = ["🥣", "🫖"];
const wash = (dish) => console.log(`${dish} 설거지하는 중...`);
const dry = (dish) => console.log(`${dish} 말리는 중...`);
const putAway = (dish) => console.log(`${dish} 정리하는 중...`);

Array.prototype.forest = function (tree, thisArg) { 
  let k = 0;
  while (k < this.length) {
    tree(this[k], k, this);
    k += 1;
  }
  return undefined;
}

foods.forest(function (value, index, arr) {
  cook(value);
  eat(value);
});

dishes.forest((value) => { 
  wash(value);
  dry(value);
  putAway(value);
});

// 1. Let O be ? ToObject(this value).
// 2. Let len be ? LengthOfArrayLike(O).
// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
// 4. Let k be 0.
// 5. Repeat, while k < len,
// a. Let Pk be ! ToString(𝔽(k)).
// b. Let kPresent be ? HasProperty(O, Pk).
// c. If kPresent is true, then
// i. Let kValue be ? Get(O, Pk).
// ii. Perform ? Call(callbackfn, thisArg, « kValue, 𝔽(k), O »).
// d. Set k to k + 1.
// 6. Return undefined.









