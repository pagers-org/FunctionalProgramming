var user = {
  id: '1',
};
// error handling 을 위해 try catch 를 사용하자.
// error 핸들링은 getUserData 안에서 하되 고차함수를 이용해서 바깥에서 핸들링하자.
async function getUserData(user, onError) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${user.id}`);
    return response.json();
  } catch (error) {
    onError(error);
  }
}

const URL = `https://jsonplaceholder.typicode.com/users`;

async function getRequest(url, prams, onError) {
  try {
    const response = await fetch(`${url}?${prams}`);
    return response.json();
  } catch (error) {
    onError(error);
  }
}

// try catch 의 위치

var logToSnapErrors = error => console.log(`🚫 에러가 발생했어요: ${error.message}`);

// getUserData(user, logToSnapErrors);

getRequest(URL, `id=${user.id}`, logToSnapErrors);
