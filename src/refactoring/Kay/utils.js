export const _forEach = (array, callBack) => {
  if (array.length === 0) {
    throw new Error("You don't have a array");
  }

  for (let i = 0; i < array.length; i++) {
    callBack(array[i], i, ...array);
  }
};

export const _map = (array, callBack) => {
  if (array.length === 0) {
    return [];
  }

  const result = [];
  _forEach(array, (item, idx, copy) => result.push(callBack(item, idx, copy)));

  return result;
};

export const _filter = (array, callBack) => {
  const result = [];
  _forEach(array, (item, idx, copy) => {
    if (callBack(item, idx, copy)) {
      result.push(item);
    }
  });

  return result;
};

export const _reduce = (array, callBack, initValue) => {
  if (array.length === 0) {
    return initValue;
  }

  const hasInitValue = !!initValue;
  let accResult = hasInitValue ? initValue : array[0];
  let idx = hasInitValue ? 0 : 1;

  for (idx; idx < array.length; idx++) {
    accResult = callBack(accResult, array[idx]);
  }

  return accResult;
};
