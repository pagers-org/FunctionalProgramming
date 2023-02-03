const forEach = (array: unknown[], f: (item: unknown) => void) => {
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    f(item);
  }
};

const map = <T extends unknown>(array: T[], callback: (value: T) => T): T[] => {
  const newArray: T[] = [];

  forEach(array, (element) => {
    newArray.push(callback(element as T));
  });

  return newArray;
};

const filter = <T extends unknown>(
  array: T[],
  callback: (value: T) => boolean
): T[] => {
  const newArray: T[] = [];

  forEach(array, (element) => {
    callback(element as T) && newArray.push(element as T);
  });

  return newArray;
};

const reduce = <T extends unknown>(
  array: T[],
  callback: (p: T, c: T) => T,
  initialValue: T
) => {
  let newValue: T = initialValue;

  forEach(array, (element) => {
    newValue = callback(newValue, element as T);
  });

  return newValue;
};
