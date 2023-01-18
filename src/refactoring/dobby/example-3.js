const logToSnapErrors = (error) =>
  console.log(`🚫 에러가 발생했어요: ${error.message}`);

const handleAsyncActionWithErrorLog = async (asyncFunc) => {
  try {
    await asyncFunc();
  } catch (error) {
    logToSnapErrors(error);
  }
};

const getUserData = async (user) => {
  const { id } = user;

  return handleAsyncActionWithErrorLog(
    getUserData(`https://jsonplaceholder.typicode.com/users?id=${id}`)
  );
};

getUserData({ id: 3 });
