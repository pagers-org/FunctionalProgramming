var user = {
  id: "1",
};

async function getUserData({ id }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?id=${id}`
  );
}
async function saveUserData({ id }) {
  // TODO
}

var logToSnapErrors = (error) =>
  console.log(`🚫 에러가 발생했어요: ${error.message}`);

const withLogging = (f) => {
  try {
    f();
  } catch (error) {
    logToSnapErrors(error);
  }
};
withLogging(() => {
  getUserData(user);
});
withLogging(() => {
  saveUserData(user);
});
/**
 * 리팩토링: withLogging() 함수로 만들어 본문이 되는 함수를 인자로 받음으로써 여러 함수의 error를 보내야 하는 snap errors 서비스가 용이해졌습니다.
 */
