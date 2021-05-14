import { escapeReg } from "../logic/escapeReg";

describe("Check return escape str", () => {
  test("submit C++", () => {
    const text = "C++";
    const tmp = escapeReg(text);
    const result = text.match(tmp);

    expect(result).toBeTruthy;
  });
});
