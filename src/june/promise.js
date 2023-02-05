class Promise {
  constructor(callback) {
    this.state = 'pending';
    this.onFulfilledCallback = null;
    this.onRejectedCallback = null;
    const resolve = value => {
      this.state = 'fulfilled';
      this.value = value;
      if (this.onFulfilledCallback !== null) {
        this.onFulfilledCallback(value);
      }
    };
    const reject = value => {
      this.state = 'rejected';
      this.value = value;
      if (this.onRejectedCallback !== null) {
        this.onRejectedCallback(value);
      }
    };
    callback(resolve, reject);
  }

  then(callback) {
    if (this.state === 'pending') {
      this.onFulfilledCallback = callback;
    }
    if (this.state === 'fulfilled') {
      callback(this.value);
    }
    return this;
  }

  catch(callback) {
    if (this.state === 'pending') {
      this.onRejectedCallback = callback;
    }
    if (this.state === 'rejected') {
      callback(this.value);
    }
    return this;
  }
  getValue() {
    return this.value;
  }
}

function asyncResolve() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('resolved after 1s'), 1000);
  });
}

asyncResolve().then(result => console.log(result));

asyncResolve()
  .then(result => `next ${result}`)
  .then(result => console.log(`should log "next result" but ${result} logged`));
