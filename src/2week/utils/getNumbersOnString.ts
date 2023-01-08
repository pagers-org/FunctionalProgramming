const getNumberOnStringReg = /[^0-9]/g;

export const GetNumbersOnString = (rawString: string) =>
  Number(rawString.replace(getNumberOnStringReg, ""));
