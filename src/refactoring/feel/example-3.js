// 1. userData
// 2. 비동기 통신 함수 getUserData
// 3. try-catch
// 4. 에러 로깅

// addeventlistener에 대한 핸들러 함수를 만든다고 생각하자

const user = {
  id: '1',
};

const logToSnapErrors = error => console.log(`🚫 에러가 발생했어요: ${error.message}`);

const getUserData = ({ id }) => {
  const pr = fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`).then(response => {
    //
  });

  return pr;
};

// 에러 시 단순 로깅이 목적이라면 default가 있으므로 넣지 않는다
const processAsync = (asyncCallback, errorCallback = logToSnapErrors) => {
  const pr = asyncCallback().catch(errorCallback);
  return pr;
};

// 단순 로깅일 때
processAsync(getUserData(user));
// errorCallback을 실행시킬 때
processAsync(비동기, 비동기에러처리);
