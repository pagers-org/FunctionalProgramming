// C - util
export const add = (num1: number, num2: number) => num1 + num2;

// C - util
export const sum_array = (numArray: number[]) => numArray.reduce(add, 0);
// C - util
export const add_element_to_array = <T extends unknown>(
  array: T[],
  element: T
) => [...array, element];

// C - util
export const get_raw_price = (price: string, unit = "원") =>
  Number(price.replace(unit, "").replace(",", ""));

// A - dom
export const get_element = (element: Element, selector: string) =>
  element.querySelector(selector);

// A - dom
export const isPredicatedElement = <T extends Element>(
  target: T | null
): target is T => {
  return target instanceof Element;
};
