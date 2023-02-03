class Promise2 {
  #then = [];
  #catch = [];

  constructor(executeFunction) {
    const resolve = param => {
      this.#then.forEach(cb => cb(param));
    };

    const reject = param => {
      this.#catch.forEach(cb => cb(param));
    };

    executeFunction(resolve, reject);
  }

  then(callback) {
    this.#then.push(callback);

    return this;
  }

  catch(callback) {
    this.#catch.push(callback);

    return this;
  }
}

const result = new Promise2((resolve, reject) => {
  setTimeout(() => {
    const num = Math.floor(Math.random() * 10 + 1);

    if (num > 5) {
      resolve(num);
      return;
    }
    reject(num);
  }, 1000);
});

result
  .then(param => {
    console.log(param);
    return param;
  })
  .then(param => {
    console.log('then', param);
  })
  .catch(err => {
    console.log(err);
    return err;
  })
  .catch(err => {
    console.log('catch', err);
  });
