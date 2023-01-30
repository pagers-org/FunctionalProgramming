const { I } = require('../../internal_utils');

const groupBy = (condition) => {
  return (iter) => {
    if (!I.isIterable(iter)) {
      iter = Object.values(iter);
    }
    return iter.reduce((acc, value) => {
      let key = value[condition];
      if (typeof condition === 'function') {
        key = condition(value);
      }
      acc[key] = acc[key] || [];
      acc[key].push(value);
      return acc;
    }, {});
  };
};

exports.groupBy = groupBy;