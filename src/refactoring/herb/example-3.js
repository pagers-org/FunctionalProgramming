const user = {
  id: '1',
};

const logToSnapErrors = (error) => console.log(`🚫 에러가 발생했어요: ${error.message}`);

const fetchGetUserData = async ({id}) => {
  const idCopy = id;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${idCopy}`);
  return response;
}

const fetchAsync = async (asyncLogic) => {
  try {
    return await asyncLogic;
  } catch (err) {
     logToSnapErrors(error);
  }
}

const getUserData = user => {
  return fetchAsync((fetchGetUserData(user)))
}


// try~catch를 수행하는 수행하는 액션을 하나 만들자.
  //try-catch를 getUserData 내부에 넣고 catch에 logToSnapErrors를 넣자.