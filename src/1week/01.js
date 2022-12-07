var x = 2;

function lineFunction() {
  return calculation(x);
}
/**
 * function lineFunction() {
 *  return 2 * x + 3;
 * }
 * 이 함수는 전역 변수인 x를 사용합니다. 전역변수인 x 는 "암묵적 입력" 이며, 이 함수는 "액션"이 됩니다.
 * 아래와 같이 함수를 분리하면, "암묵적 입력"을 명시적으로 표현할 수 있습니다.
 */
function calculation(number) {
  return 2 * number + 3;
}

exports.lineFunction = lineFunction;
