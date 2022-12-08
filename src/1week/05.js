function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (obj instanceof Array) {
    return obj.reduce((arr, item, i) => {
      arr[i] = deepCopy(item);
      return arr;
    }, []);
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags);
  }

  if (obj instanceof Map) {
    return new Map(obj);
  }

  if (obj instanceof Set) {
    return new Set(obj);
  }

  if (obj instanceof Object) {
    return Object.keys(obj).reduce((newObj, key) => {
      newObj[key] = deepCopy(obj[key]);
      return newObj;
    }, {});
  }
}

exports.deepCopy = deepCopy;
