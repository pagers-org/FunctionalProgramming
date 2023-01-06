export const KRW_to_number = (krw: string) => {
  const krwNumber = Number(krw.replace(/[^0-9]+/g, ""));
  return Number.isNaN(krwNumber) ? 0 : krwNumber;
};

export const number_to_KRW = (krwNumber: number) => {
  const krw = `${krwNumber.toLocaleString()}원`;
  return krw;
};

export const calc_KRW_total = (priceList: string[]): number => {
  return priceList.reduce((acc, curr) => acc + KRW_to_number(curr), 0);
};
