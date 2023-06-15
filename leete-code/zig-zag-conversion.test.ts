import { readMatrix, zigZagConversion } from "./zig-zag-conversion";

type Scenario = { data: [string, number]; result: string };

const scenarios: Scenario[] = [
  { data: ["AB", 1], result: "AB" },
  { data: ["ABCD", 2], result: "ACBD" },
  { data: ["PAY", 3], result: "PAY" },
  { data: ["PAYD", 3], result: "PADY" },
  { data: ["PAYDA", 3], result: "PAADY" },
  { data: ["PAYPALISHIRING", 3], result: "PAHNAPLSIIGYIR" },
  { data: ["PAYPALISHIRING", 4], result: "PINALSIGYAHRPI" },
];

describe.each(scenarios)("", ({ data, result }) => {
  const description = ["returns", result, "for", data].join(" ");

  it(description, () => {
    expect(zigZagConversion(...data)).toBe(result);
  });
});

type ReadMatrixScenario = {
  data: [(string | null)[][]];
  result: string;
};

const readMatrixScenarios: ReadMatrixScenario[] = [
  { data: [[["a"]]], result: "a" },
  { data: [[["a"]]], result: "a" },
  { data: [[["ab"]]], result: "ab" },
  { data: [[["abc"]]], result: "abc" },
  { data: [[[..."abc"], [null, null, "d"]]], result: "abcd" },
  { data: [[[..."abc"], [null, null, "d"], [null, "e"]]], result: "abecd" },
];

describe.each(readMatrixScenarios)("", ({ data, result }) => {
  const description = ["returns", result, "for", data].join(" ");

  it(description, () => {
    expect(readMatrix(...data)).toBe(result);
  });
});
