const user = {
  id: "1",
};

const getUserData = async ({ id }) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users?id=${id}`
  );

  return data.json();
};

const logToSnapErrors = (callBack) => {
  try {
    return callBack();
  } catch (error) {
    console.log(`🚫 에러가 발생했어요: ${error.message}`);
  }
};

logToSnapErrors(() => getUserData(user));
