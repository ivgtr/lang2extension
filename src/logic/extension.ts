import { parse } from "./parse";

export const extension = (name: string): string => {
  const languageData = parse(name);

  return languageData?.extension || "unknown";
};
