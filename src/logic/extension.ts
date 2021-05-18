import { parse } from "./parse";

export const extension = (name: string): string | undefined => {
  const languageData = parse(name);

  return languageData?.extension || undefined;
};
