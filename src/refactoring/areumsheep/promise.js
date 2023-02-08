const PROMISES_STATE = Object.freeze({
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
});

class MyPromise {
  #state = PROMISES_STATE.pending;
  #value;
  #resolveLastcalls = [];
  #rejectLastcalls = [];

  constructor(fn) {
    try {
      fn(this.#resolve.bind(this), this.#reject.bind(this));
    } catch (e) {
      this.#reject(e);
    }
  }

  #resolve(value) {
    queueMicrotask(() => {
      this.#state = PROMISES_STATE.fulfilled;
      this.#value = value;
      this.#resolveLastcalls.forEach(call => call(this.#state));
    });
  }
  #reject(error) {
    queueMicrotask(() => {
      this.#state = PROMISES_STATE.rejected;
      this.#value = error;
      this.#rejectLastcalls.forEach(call => call(this.#state));
    });
  }

  then(callback) {
    if (this.#state === PROMISES_STATE.pending) {
      return new MyPromise(resolve => {
        this.#resolveLastcalls.push(() => resolve(callback(this.#value)));
      });
    } else if (this.#state === PROMISES_STATE.fulfilled) {
      return new MyPromise(resolve => resolve(callback(this.#value)));
    }
  }
  catch(callback) {
    if (this.#state === PROMISES_STATE.rejected) {
      callback(this.#value);
    }
    return this;
  }
  finally(callback) {
    return this.then((value) => {
      callback();
      return value;
    })
  }
}