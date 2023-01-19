const forEach = (array, callBack) => {
  for (let i = 0; i < array.length; i++) {
    callBack(array[i], i, ...array);
  }
};

const map = (array, callBack) => {
  const result = [];
  forEach(array, (item, idx, copy) => result.push(callBack(item, idx, copy)));

  return result;
};

const filter = (array, callBack) => {
  const result = [];
  forEach(array, (item, idx, copy) => {
    if (callBack(item, idx, copy)) {
      result.push(item);
    }
  });

  return result;
};

const reduce = (array, callBack, initValue) => {
  const hasInitValue = !!initValue;
  let accResult = hasInitValue ? initValue : array[0];
  let idx = hasInitValue ? 0 : 1;

  for (idx; idx < array.length; idx++) {
    accResult = callBack(accResult, array[idx]);
  }

  return accResult;
};
