// 1. userData
// 2. 비동기 통신 함수 getUserData
// 3. try-catch
// 4. 에러 로깅

// addeventlistener에 대한 핸들러 함수를 만든다고 생각하자

const user = {
  id: '1',
};

const logToSnapErrors = error => console.log(`🚫 에러가 발생했어요: ${error.message}`);

const getUserData = ({ id }, errorCallback) =>
  fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
    .then(() => console.log('done'))
    .catch(errorCallback);

getUserData(user, logToSnapErrors);

/*
getUserData가 아니라 setUserData라면?
*/
