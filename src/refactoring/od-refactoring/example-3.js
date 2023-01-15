var user = {
  id: '1',
};

async function getUserData({ id }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
  console.log("호출", response);
}

var logToSnapErrors = error => console.log(`🚫 에러가 발생했어요: ${error.message}`);

function fnWithTryCatch(callback, arg) { 
  try {
    callback(arg);
  } catch (error) {
    logToSnapErrors(error);
  }
}

fnWithTryCatch(getUserData, user);

// 정답 : fnWithTryCatch(function(){getUserData(user)});


// 2. 수정전 3개 클린코드 만들기
// 다음 수업 커링/ 에이드?/ 모나드?

