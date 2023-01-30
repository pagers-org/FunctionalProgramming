// 유저데이터
const user = {
  id: '1',
};

// 비동기 통신하는 함수
const getUserData = async () => {
  const id = user.id;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
}

// 에러 처리 구문
const logToSnapErrors = error => console.log(`🚫 에러가 발생했어요: ${error.message}`);

// try-catch 구문
const tryCatch = (f, handleError) => {
  try {
    f();
  } catch(error) {
    handleError(error);
  }
}

tryCatch(getUserData, logToSnapErrors);
