var user = {
  id: '1',
};

async function getUserData({ id }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
}

var logToSnapErrors = error => console.log(`🚫 에러가 발생했어요: ${error.message}`);

try {
  getUserData(user);
} catch (error) {
  logToSnapErrors(error);
}

// 리팩토링 사고의 흐름
// 1. 매번 try catch를 적기가 귀찮다면? 
// 2. try 시에 할 콜백과 에러 시 콜백을 받도록 해볼까? 
// 3. 콜백을 매번 적는 것도 일이라고 생각한다면?


const withTryCatch = (params, tryCallback, errorCallback) => {
  try{
    tryCallback(params)
  }catch(e){
    errorCallback(e)
  }
}

const makeWithLogFunction = (params, callback) => {
  return withTryCatch(params, callback, logToSnapErrors)
}

// 요구사항
// user, 비동기 함수, try-catch 구문, 로깅 
// 반복되는 try-catch 가 문제 => 일급 추상을 또 잘 이용해보면 된다.

// 추가사항
// map, filter, reduce 구현하기 => 다음 주는 라이브러리 만들어 볼 예정

