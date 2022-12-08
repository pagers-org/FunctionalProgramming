
// 기존의 함수는 x가 전역이므로 lineFunction가 액션이었다.
// 액션에서 계산으로 바꾸는 방법은 의존성을 인자로 받게하는것이다.
function lineFunction(x) {
  return 2 * x + 3;
}

exports.lineFunction = lineFunction;
