const { I } = require('../../internal_utils');

const uniqueBy = (callback) => {
  const map = new Map();
  return (arr) => {
    if (!I.isIterable(arr)) {
      return [];
    }
    return arr.reduce((acc, item) => {
      let key;
      // Object인 경우
      if (!Array.isArray(item)) {
        key = JSON.stringify(item);
      }
      // callback이 있는 경우
      if (typeof callback === 'function') {
        key = callback(item);
      }

      if (!map.has(key)) {
        acc.push(item);
      }
      map.set(key, item);

      return acc;
    }, []);
  }
};

exports.uniqueBy = uniqueBy;