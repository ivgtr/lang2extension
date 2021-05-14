import languagesExtension from "./config/languagesExtension.json";
import { escapeReg } from "./escapeReg";

export const parse = (
  name: string
): { name: string; type: string; extension: string } | undefined => {
  const dataset = languagesExtension.sort((a, b) =>
    a.name.length > b.name.length ? -1 : b.name.length > a.name.length ? 1 : 0
  );

  const extension = dataset.find((i) => {
    const reg = new RegExp(escapeReg(i.name));
    return name.match(reg) !== null;
  });

  return extension;
};
