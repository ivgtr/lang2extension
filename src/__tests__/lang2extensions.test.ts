import { lang2extensions } from "../index";

describe("Check return .py", () => {
  const ans = ".py";
  test("submit Python (3.8.2)", () => {
    const text = "Python (3.8.2)";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });

  test("submit Python2 (2.7.6)", () => {
    const text = "Python2 (2.7.6)";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });

  test("submit PyPy3 (2.4.0)", () => {
    const text = "PyPy3 (2.4.0)";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });

  test("submit PyPy3", () => {
    const text = "PyPy3";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });

  test("submit PyPy", () => {
    const text = "PyPy";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });
});

describe("Check return .cpp", () => {
  const ans = ".cpp";
  test("submit C++", () => {
    const text = "C++";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });

  test("submit C++11 (GCC 4.9.2)", () => {
    const text = "C++11 (GCC 4.9.2)";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });
});

describe("Check return .cs", () => {
  const ans = ".cs";
  test("submit C#", () => {
    const text = "C#";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });

  test("submit C# (Mono 4.6.2.0)", () => {
    const text = "C# (Mono 4.6.2.0)";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });
});

describe("Check return .c", () => {
  const ans = ".c";
  test("submit C", () => {
    const text = "C";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });

  test("submit C (GCC 9.2.1)", () => {
    const text = "C (GCC 9.2.1)";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });
});

describe("Check return .d", () => {
  const ans = ".d";
  test("submit D", () => {
    const text = "D";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });

  test("submit D (DMD64 v2.070.1)", () => {
    const text = "D (DMD64 v2.070.1)";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });
});

describe("Check return .go", () => {
  const ans = ".go";
  test("submit Go", () => {
    const text = "Go";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });

  test("submit Go (1.6)", () => {
    const text = "Go (1.6)";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });
});

describe("Check return .js", () => {
  const ans = ".js";
  test("submit JavaScript", () => {
    const text = "JavaScript";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });

  test("submit JavaScript (node.js v5.12)", () => {
    const text = "JavaScript (node.js v5.12)";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });
});

describe("Check return .jl", () => {
  const ans = ".jl";
  test("submit Julia", () => {
    const text = "Julia";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });

  test("submit Julia (0.5.0))", () => {
    const text = "Julia (0.5.0)";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });
});

describe("Check return .lua", () => {
  const ans = ".lua";
  test("submit Lua", () => {
    const text = "Lua";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });
});

describe("Check return .pl", () => {
  const ans = ".pl";
  test("submit Perl", () => {
    const text = "Perl";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });
});

describe("Check return .php", () => {
  const ans = ".php";
  test("submit PHP", () => {
    const text = "PHP";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });

  test("submit PHP7 (7.0.15)", () => {
    const text = "PHP7 (7.0.15)";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });
});

describe("Check return .rb", () => {
  const ans = ".rb";
  test("submit Ruby", () => {
    const text = "Ruby";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });

  test("submit Ruby (2.3.3)", () => {
    const text = "Ruby (2.3.3)";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });
});

describe("Check return .swift", () => {
  const ans = ".swift";
  test("submit Swift", () => {
    const text = "Swift";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });
});

describe("Check return .ts", () => {
  const ans = ".ts";
  test("submit TypeScript", () => {
    const text = "TypeScript";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });

  test("submit TypeScript (2.1.6)", () => {
    const text = "TypeScript (2.1.6)";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });
});

describe("Check return .java", () => {
  const ans = ".java";
  test("submit JAVA", () => {
    const text = "JAVA";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });

  test("submit JAVA8", () => {
    const text = "JAVA8";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });
});

describe("Check return .rs", () => {
  const ans = ".rs";
  test("submit Rust", () => {
    const text = "Rust";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });
});

describe("Check return .sh", () => {
  const ans = ".sh";
  test("submit Bash", () => {
    const text = "Bash";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });

  test("submit Zsh", () => {
    const text = "Zsh";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });

  test("submit dash", () => {
    const text = "dash";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });
});

describe("Check return unknown", () => {
  const ans = "unknown";
  test("submit Fizz", () => {
    const text = "Fizz";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });

  test("submit Buzz", () => {
    const text = "Buzz";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });

  test("submit FizzBuzz", () => {
    const text = "FizzBuzz";
    const result = lang2extensions(text);

    expect(result).toBe(ans);
  });
});
