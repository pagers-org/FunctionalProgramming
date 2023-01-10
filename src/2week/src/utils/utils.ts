export const stringToNumber = (input: string) => Number(input.replace(/,|원/g, ''));

export const getTotalPrice = (price: number, tax: number) => price + tax;

export const makeKorFormat = (price: number) => `${Intl.NumberFormat('ko-KR').format(price)}원`;

export const sum = (a: number, b: number) => a + b;
