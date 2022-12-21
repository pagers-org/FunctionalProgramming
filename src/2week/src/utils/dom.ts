type targetType = Document | HTMLElement | ParentNode | undefined;

export const $ = <T extends HTMLElement>(selector: string, target: targetType = document) => {
  const element = target.querySelector(selector) as T;
  if (!element) throw new Error("element not found");
  return element;
}

export const $$ = <T extends HTMLElement>(selector: string, target: targetType = document) => {
  const elements = target.querySelectorAll(selector) as NodeListOf<T>;
  if (!elements) throw new Error("elements not found");
  return elements;
}