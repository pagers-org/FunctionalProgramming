const rxjs = require('rxjs');
const { of } = require('rxjs'); // 생성함수
const { map } = require('rxjs/operators'); // 연산함수

const x = rxjs.of(1, 2, 3);

x.subscribe(data => {
  console.log(data);
});
// 1
// 2
// 3

const y = of(1, 2, 3).pipe(map(x => x * 10));

y.subscribe(data => {
  console.log(data);
});
// 10
// 20
// 30
