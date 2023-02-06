// 1.Simplest Promise
const myFunction = () => {
  return new Promise((resolve) => {
    resolve('my promise');
  });
};

// myFunction().then((result) => console.log(result));

// 2. Simpler Promise
// reject를 추가
class SimplerPromise {
  constructor(callback) {
    const resolve = (value) => {
      this.value = value;
    };

    const reject = (value) => {
      this.value = value;
    };

    callback(resolve, reject);
  }

  then(callback) {
    callback(this.value);
  }

  catch(callback) {
    callback(this.value);
  }
}

// 3. Simple Promise

class SimplePromise {
  constructor(callback) {
    this.state = 'pending';

    const resolve = (value) => {
      this.state = 'fulfilled';
      this.value = value;
    };

    const reject = (value) => {
      this.state = 'rejected';
      this.value = value;
    };
    callback(resolve, reject);
  }

  then(callback) {
    if (this.state === 'fulfilled') {
      callback(this.value);
    }
    return this;
  }

  catch(callback) {
    if (this.state === 'rejected') {
      callback(this.value);
    }
    return this;
  }
}

/**
 * pending, fulfilled, rejected 상태를 추가
 * 그리고 then 과 catch 메소드에서 this를 반환
 */

const myResolve = () => {
  return new SimplePromise((resolve, reject) => {
    resolve('my resolve');
  });
};

const myReject = () => {
  return new SimplePromise((resolve, reject) => {
    reject('my reject');
  });
};

console.log('====myResolve====');

myResolve()
  .then((result) => console.log(result)) //my resolve
  .catch((result) => console.log(result));

console.log('====myReject====');
myReject()
  .then((result) => console.log(result))
  .catch((result) => console.log(result)); //my reject

// 4.비동기 지원 프로미스

class AsyncPromise {
  constructor(callback) {
    this.state = 'pending';
    this.onFulfilledCallback = null;
    this.onRejectedCallback = null;

    const resolve = (value) => {
      this.state = 'fulfilled';
      this.value = value;
      if (this.onFulfilledCallback !== null) {
        this.onFulfilledCallback(value);
      }
    };

    const reject = (value) => {
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
}

/**
 * pending 상태일 때 콜백 함수를 멤버 변수에 저장한다.
 * 그리고, 비동기 처리 후 resolve 또는 reject가 호출되면 콜백을 실행하도록 변경했다.
 */

const myAsyncResolve = () => {
  return new AsyncPromise((resolve, reject) => {
    setTimeout(() => resolve('my async Resolve'), 1000);
  });
};

myAsyncResolve().then((result) => {
  for (let i = 0; i < 10; i++) {
    console.log(result);
  }
});

//체이닝 지원 프로미스
class ChainPromise {
  constructor(callback) {
    this.state = 'pending';
    this.onFulfilledCallback = null;
    this.onRejectedCallback = null;

    const resolve = (value) => {
      this.state = 'fulfilled';
      this.value = value;
      if (this.onFulfilledCallback !== null) {
        this.onFulfilledCallback(value);
      }
    };

    const reject = (value) => {
      this.state = 'rejected';
      this.value = value;
      if (this.onRejectedCallback !== null) {
        this.onRejectedCallback(value);
      }
    };
    callback(resolve, reject);
  }

  then(callback) {
    return new ChainPromise((resolve, reject) => {
      if (this.state === 'pending') {
        this.onFulfilledCallback = () => {
          const result = callback(this.value);
          resolve(result);
        };
      }

      if (this.state === 'fulfilled') {
        const result = callback(this.value);
        resolve(result);
      }
    });
  }

  catch(callback) {
    return new ChainPromise((resolve, reject) => {
      if (this.state === 'pending') {
        this.onRejectedCallback = () => {
          const result = callback(this.value);
          resolve(result);
        };
      }

      if (this.state === 'rejected') {
        const result = callback(this.value);
        resolve(result);
      }
    });
  }
}

/**
 * then 과 catch 메소드에서 새로운 프로미스 객체를 반환함으로써 체이닝이 가능해졌다.
 * 반환하는 프로미스 객체의 resolve 또는 reject에 이전 콜백 함수의 결괏값을 넣는 것이 핵심이다.
 *
 * catch 메소드에서 reject가 아닌 resolve를 호출한 것에 의문을 품을 수 있다.
 * 실제 프로미스 객체의 프로미스 체이닝 작동방식을 보면 catch 뒤의 then 콜백이 실행되는 것을 볼 수 있다.
 * 그 부분과 똑같이 작동하기 위해서는 catch에서 resolve를 호출해야한다. (이부분은 문제점이 있음)
 */

// 6. 비동기 체이닝 지원 프로미스
// 지금까지 비동기 체이닝의 예시를 들자면 아래와 같다.
// getUserId(userName).then((id) => return getUserAge(id)).then((age) => console.log(age))

class AsyncChainPromise {
  constructor(callback) {
    this.state = 'pending';
    this.onFulfilledCallback = null;
    this.onRejectedCallback = null;

    const resolve = (value) => {
      this.state = 'fulfilled';
      this.value = value;
      if (this.onFulfilledCallback !== null) {
        this.onFulfilledCallback(value);
      }
    };

    const reject = (value) => {
      this.state = 'rejected';
      this.value = value;
      if (this.onRejectedCallback !== null) {
        this.onRejectedCallback(value);
      }
    };
    callback(resolve, reject);
  }

  then(callback) {
    return new AsyncChainPromise((resolve, reject) => {
      if (this.state === 'pending') {
        this.onFulfilledCallback = () => {
          this.handleCallback(callback, resolve);
        };
      }

      if (this.state === 'fulfilled') {
        this.handleCallback(callback, resolve);
      }
    });
  }

  catch(callback) {
    return new AsyncChainPromise((resolve, reject) => {
      if (this.state === 'pending') {
        this.onRejectedCallback = () => {
          this.handleCallback(callback, resolve);
        };
      }

      if (this.state === 'rejected') {
        this.handleCallback(callback, resolve);
      }
    });
  }

  handleCallback(callback, resolve, reject) {
    const result = callback(this.value);

    if (result instanceof AsyncChainPromise) {
      result.then(resolve);
    } else {
      resolve(result);
    }
  }
}

/**
 * instanceof 함수를 통해 콜백의 결과가 프로미스 객체이면 객체의 then을 호출함으로서 비동기 체이닝을 지원한다.
 * 하지만 위 코드에는 큰 오점이있다. 아무런 조건 없이 then을 호출한다는 것이다.
 * 이 부분을 수정해서 handleCallback 메소드를 다시 작성하겠다.
 */

// 중요한 점은 pending 상태일 경우, 실행해야 할 함수를 result 인스턴스에 저장했다가 실행한다는 점이다.
// 하지만 reject가 수행되지 않는다.
// then 과 catch를 호출할때마다 새로운 프로미스가 만들어진다. 그리고 1초 뒤 첫번째 인스턴스에서 reject를 호출하기 때문에
// 마지막 인스턴스의 콜백은 당연히 실행되지 않는다.
// 따라서 현재 인스턴스에서 실행할 콜백이 없을 실 fall through 해줘야 한다.
// 또한 동기적 프로미스도 위와 같은 이유로 fallthrough 기능이 필요하다.

class Promise {
  #value = null;
  #state = 'pending';
  #child = null;
  #onFulfilledCallbacks = [];
  #onRejectedCallbacks = [];
  #onFinallyCallbacks = [];

  constructor(callback) {
    callback(this.#resolve, this.#reject);
  }

  #resolve = (value) => {
    if (this.#state === 'pending') {
      this.#state = 'fulfilled';
      this.#value = value;
      this.#onFinallyCallbacks.forEach((callback) => callback());

      if (this.#onFulfilledCallbacks.length !== 0) {
        this.#onFulfilledCallbacks.forEach((callback) => callback(value));
      } else {
        this.#child?.#resolve(value);
      }
    }
  };

  #reject = (value) => {
    if (this.#state == 'pending') {
      this.#state = 'rejected';
      this.#value = value;
      this.#onFinallyCallbacks.forEach((callback) => callback());

      if (this.#onFinallyCallbacks.length !== 0) {
        this.#onRejectedCallbacks.forEach((callback) => callback(value));
      } else {
        this.#child?.#reject(value);
      }
    }
  };

  then(callback) {
    this.#child = new Promise((resolve, reject) => {
      if (this.#state === 'pending') {
        this.#onFulfilledCallbacks.push(() => {
          this.#handleCallback(callback, resolve, reject);
        });
      }

      if (this.#state === 'fulfilled') {
        this.#handleCallback(callback, resolve, reject);
      }

      if (this.#state === 'rejected') {
        reject(this.#value);
      }
    });

    return this.#child;
  }

  catch(callback) {
    this.#child = new Promise((resolve, reject) => {
      if (this.#state === 'pending') {
        this.#onRejectedCallbacks.push(() => {
          this.#handleCallback(callback, resolve, reject);
        });
      }

      if (this.#state === 'rejected') {
        this.#handleCallback(callback, resolve, reject);
      }

      if (this.#state === 'fulfilled') {
        resolve(this.#value);
      }
    });

    return this.#child;
  }

  finally(callback) {
    this.#child = new Promise((resolve, reject) => {
      if (this.#state === 'pending') {
        this.#onFinallyCallbacks.push(() => {
          this.#handleCallback(callback, resolve, reject);
        });
      }

      if (this.#state === 'fulfilled' || this.#state === 'rejected') {
        this.#handleCallback(callback, resolve, reject);
      }
    });

    return this.#child;
  }

  #handleCallback(callback, resolve, reject) {
    try {
      const result = callback(this.#value);

      if (result instanceof Promise) {
        if (result.#state === 'fulfilled') {
          result.then(resolve);
        }

        if (result.#state === 'rejected') {
          result.catch(reject);
        }

        if (result.#state === 'pending') {
          result.#onFulfilledCallbacks.push(() => result.then(resolve));
          result.#onRejectedCallbacks.push(() => result.catch(reject));
        }
      } else {
        resolve(result);
      }
    } catch (error) {
      reject(error);
    }
  }
}

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('first'), 1000);
});

promise.then((result) => {
  console.log('1', result);
});
promise.then((result) => {
  console.log('2', result);
});
promise.then((result) => {
  console.log('3', result);
});
