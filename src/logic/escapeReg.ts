const reRegExp = /[\\^$.*+?()[\]{}|]/g;
const reHasRegExp = new RegExp(reRegExp.source);

export const escapeReg = (str: string): string =>
  reHasRegExp.test(str) ? str.replace(reRegExp, "\\$&") : str;
