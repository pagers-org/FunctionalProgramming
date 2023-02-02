const isIterable = (value) => typeof value[Symbol.iterator] === "function";

exports.I = {
  isIterable
};