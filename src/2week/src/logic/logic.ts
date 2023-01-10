import { FREE_SHIPPING_PRICE } from '../constants/constant';

export const isOver = (input: number) => input >= FREE_SHIPPING_PRICE;
