// const d = promise(() => {
//   something();
// }).then().catch().finally();

const callbackObject = {
  then: func => {
    func(response);
  },
  catch: func => {
    func(response);
  },
  finally: func => {
    func();
  },
};

const getPromiseObject = response => ({
  then: func => {
    func(response);
    promiseObject = getPromiseObject(response);
    return { catch: promiseObject.catch, finally: promiseObject.finally };
  },
  catch: func => {
    func(response);
    return finallyObject;
  },
  finally: func => {
    func();
  },
});

const promise = func => {
  let response;

  try {
    response = func();
  } catch (error) {
    response = error;
  }

  return getPromiseObject(response);
};

promise(() => {
  JSON.stringify({ 123: 456 });
})
  .then(res => {
    console.log(res);
  })
  .finally(() => {
    console.log('the end');
  });
