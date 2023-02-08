const { I } = require('../../internal_utils');

const groupBy = (arr, condition) => {
  if (!I.isIterable(arr)) {
    arr = Object.values(arr);
  }
  return arr.reduce((acc, value) => {
    let key = value[condition];
    if (typeof condition === 'function') {
      key = condition(value);
    }
    acc[key] = acc[key] || [];
    acc[key].push(value);
    return acc;
  }, {});
};

exports.groupBy = groupBy;