var user = {
  id: '1',
};

async function getUserData({ id }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
}

var logToSnapErrors = error => console.log(`🚫 에러가 발생했어요: ${error.message}`);

function safeFn(fn, onError) {
  try {
    return fn();
  } catch (e) {
    onError(e);
  }
}

const withLog = fn => safeFn(fn, logToSnapErrors);

document.addEventListener('click', () => withLog(() => getUserData(user)));
