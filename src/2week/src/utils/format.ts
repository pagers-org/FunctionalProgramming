const removeCharacters = (s: string) => {
  const regexp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"가-힣]/g;
  return s.replace(regexp, '');
};

export const toNumber = (s: string) => {
  const str = removeCharacters(s);
  return parseInt(str);
}; 

export const toCommaNumber = (num: number) => {
  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ',');
}