// const { map, filter, reduce } = require("./arrayUtil");

// describe("utils", () => {
//   describe("map", () => {
//     it("빈배열을 받으면 빈배열을 반환한다.", () => {
//       expect(map([], (item) => item)).toEqual([]);
//     });
//     it("빈배열을 받으면 반환한 배열과 input 배열은 서로 다르다.", () => {
//       const arr = [];
//       expect(map(arr, (item) => item)).not.toBe(arr);
//     });
//     it("fn=(item)=>({no:item}),arr=[1,2,3] 을 인자로 하면 [{no:1},{no:2},{no:3}] 을 반환한다.", () => {
//       const arr = [1, 2, 3];
//       const fn = (item) => ({ no: item });
//       expect(map(arr, fn)).toEqual([{ no: 1 }, { no: 2 }, { no: 3 }]);
//     });
//   });
//   describe("filter", () => {
//     it("빈배열을 받으면 빈배열을 반환한다.", () => {
//       expect(filter([], () => true)).toEqual([]);
//     });
//     it("빈배열을 받으면 반환한 배열과 input 배열은 서로 다르다.", () => {
//       const arr = [];
//       expect(filter(arr, () => true)).not.toBe(arr);
//     });
//     it("condition item => item % 2,arr=[1,2,3] 을 인자로 하면 [1, 3] 을 반환한다.", () => {
//       const arr = [1, 2, 3];
//       const odd = (item) => item % 2;
//       expect(filter(arr, odd)).toEqual([1, 3]);
//     });
//   });
//   describe("reduce", () => {
//     it("fn:(acc,cur)=>acc+cur,init:0,arr=[1,2,3] 을 인자로 하면 6 을 반환한다.", () => {
//       const arr = [1, 2, 3];
//       const sum = (acc, cur) => acc + cur;
//       expect(reduce(arr, sum, 0)).toEqual(6);
//     });
//     it("fn:(acc,cur)=>({...acc,[crr]:crr}),init:{}, arr=[1,2,3] 을 인자로 하면 {1:1,2:2,3:3} 을 반환한다.", () => {
//       const arr = [1, 2, 3];
//       const ToObject = (acc, cur) => ({ ...acc, [cur]: cur });
//       expect(reduce(arr, ToObject, {})).toEqual({ 1: 1, 2: 2, 3: 3 });
//     });
//   });
// });
