import { toNumber } from './format';

export interface Item {
  name: string;
  category: string;
  price: number;
}

export const isValidProps = (name: string | null, category: string | null, price: string | null) => {
  if (typeof name === 'string' && typeof category === 'string' && typeof price === 'string') {
    if (name && category && price) return true;
  }
  return false;
};
export const createItem = (name: string, category: string, price: string | number): Item => {
  if (typeof price === 'number') return { name, category, price };
  return { name, category, price: toNumber(price) };
};
