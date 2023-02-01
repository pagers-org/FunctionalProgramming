// new 키워드로 생성한다.
/**
 * 기본형
 * new MyPromise((res,rej)=>{
 *  setTimeout(()=>{
 *
 *  res('값');
 *  },100)
 *  }).then(data)
 *
 *  1. 해당 클래스의 constructor 가 받는 함수는 res,rej를 반환하는 일급함수이다.
 *  2. res는 실행 이후에 then,catch,finally 메서드를 실행할 수 있다.
 *  3. res나 rej를 실행하기 전에 then, catch,finally를 실행하면, 지연실행이 된다.
 *  4. then의 첫번째 인자인 일급함수를 실행하면 fullfiled가 되고, 해당 함수가 반환하는 값을 value로 갖는다.
 *  5. then의 두번째 인자인 일급함수를 실행하면, rejected가 되고 해당함수가 반환하는 에러를 value로 갖는다.
 *  6. catch의 첫번째 인자인 일급함수를 실행하면, rejected가 되고 해당함수가 반환하는 에러를 value로 갖는다.
 *
 * */

class MyPromise {
  #value;
  #status;
  #error;
  #PENDING = 'pending';
  #FULFILLED = 'fulfilled';
  #REJECTED = 'rejected';
  #fulfilledCallbacks = [];
  constructor(executor) {
    if (executor === undefined || executor === null) {
      throw new Error('executor 필수');
    }
    if (typeof executor !== 'function') {
      throw new Error('executor는 꼭 함수');
    }
    this.#status = this.#PENDING;
    executor(this.resolve.bind(this), this.reject.bind(this));
  }

  reject(error) {
    if (this.#status === this.#PENDING) {
      this.#error = error;
      this.#status = this.#REJECTED;
    }
  }
  resolve(data) {
    if (this.#status === this.#PENDING) {
      this.#value = data;
      this.#status = this.#FULFILLED;
      this.#fulfilledCallbacks.forEach(cb => cb(this.#value));
    }
  }

  then(onRes, onRej) {
    const promise = new MyPromise((res, rej) => {
      if (this.#status === this.#PENDING) {
        this.#fulfilledCallbacks.push(value => {
          setTimeout(() => {
            onRes(value);
          });
        });
      }
      if (this.#status === this.#FULFILLED) {
        res(onRes(this.#value));
      }
      if (this.#status === this.#REJECTED) {
        rej(onRej(this.#error));
      }
    });
    return promise;
  }
}

const sleep = ms =>
  new Promise(res => {
    setTimeout(res, ms);
  });

describe('MyPromise', () => {
  it('new MyPromise() 를 실행하면 에러를 반환한다,', () => {
    expect(() => new MyPromise()).toThrow();
  });
  it('new MyPromise(1) 를 실행하면 에러를 반환한다,', () => {
    expect(() => new MyPromise(1)).toThrow('executor는 꼭 함수');
  });
  it('new MyPromise(() => {})를 실행하면 에러가 발생하지 않는다. ', () => {
    expect(() => new MyPromise(() => {})).not.toThrow();
  });
  it('실행해봐', async () => {
    let value;
    new MyPromise((res, rej) => {
      setTimeout(() => {
        res(123);
      }, 500);
    }).then(data => (value = data));
    await sleep(1000);
    expect(value).toEqual(123);
  });
});
