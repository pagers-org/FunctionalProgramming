const { I } = require('../../internal_utils');

const unique = (arr) => {
  if (!I.isIterable(arr)) {
    return [];
  }
  return [...new Set(arr)];
}

exports.unique = unique;