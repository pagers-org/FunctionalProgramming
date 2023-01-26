// try-catch가 과연 여기에 있어야하나???
// error는 어떻게 핸들링하면 좋은가?

var user = {
  id: '1',
};

const catchError = (logic) => {
  try {
    logic();
  } catch (error) {
    console.log(`🚫 에러가 발생했어요: ${error.message}`)
  }
}

const getUserData = async ({ id }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
  return response.json();
}

catchError(getUserData);