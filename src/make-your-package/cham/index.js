// 여기에 자신의 패키지를 작성할 거에요!
const pipe =
  (...functions) =>
  value => {
    let acc = value;
    functions.forEach(func => {
      acc = func(acc);
    });
    return acc;
  };

const 배수인지체크 = (값, 배수) => {
  return 값 % 배수 === 0;
};

const 배열연산 = 배열 => {
  let 짝수 = 0;
  let 홀수 = 1;

  return 배열.map(숫자 => {
    if (배수인지체크(숫자, 2)) {
      짝수 += 숫자;
      return 짝수;
    }
    홀수 *= 숫자;
    return 홀수;
  });
};

const 배수오브적트로반환 = 배열 => {
  return 배열.reduce(
    (누산, 숫자) => {
      if (배수인지체크(숫자, 2)) {
        누산.t.push(숫자);
      }
      if (배수인지체크(숫자, 3)) {
        누산.h.push(숫자);
      }
      return 누산;
    },
    { t: [], h: [] },
  );
};

const 함수1 = pipe(배열연산, 배수오브적트로반환);

// const 함수1 = pipe(배열연산, 배수오브적트로반환)
// const 결과 = 함수1([1, 2, 3, 4, 5])

module.exports.func1 = 함수1;
