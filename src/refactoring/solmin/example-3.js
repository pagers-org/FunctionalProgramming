function callWithLogger(fn) {
  try {
    fn();
  } catch (error) {
    logToSnapErrors(error);
  }
}

function getData(user) {
  getUserData(user);
}
callWithLogger(getData(user));
// 익명함수로 한번만 부르고 말 함수는 이렇게 사용하자
callWithLogger(function () {
  getUserData(user);
});

// var user = {
//   id: "1",
// };

// async function getUserData({ id }) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users?id=${id}`
//   );
// }

// var logToSnapErrors = (error) =>
//   console.log(`🚫 에러가 발생했어요: ${error.message}`);

// try {
//   getUserData(user);
// } catch (error) {
//   logToSnapErrors(error);
// }

// try catch에서의 중복된 부분을 재사용하자
// try 구문에서 사용하는 함수를 고차함수를 사용해서 인자로 받자
