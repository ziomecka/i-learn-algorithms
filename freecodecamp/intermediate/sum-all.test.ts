import {
  sumAll,
  sumAllArithmeticProgression,
  sumAllRecursive,
} from "./sum-all";

type Scenario = {
  data: [number, number];
  result: number;
};

const scenarios: Scenario[] = [
  { data: [0, 1], result: 1 },
  { data: [-1, 2], result: 2 },
  { data: [5, 2], result: 14 },
];

describe.each(scenarios)("sumAll", ({ data, result }) => {
  const description = ["returns", result, "for", data].join(" ");

  it(description, () => {
    expect(sumAll(data)).toBe(result);
  });
});

describe.each(scenarios)("sumAll", ({ data, result }) => {
  const description = ["returns", result, "for", data].join(" ");

  it(description, () => {
    expect(sumAllArithmeticProgression(data)).toBe(result);
  });
});

describe.each(scenarios)("sumAll", ({ data, result }) => {
  const description = ["returns", result, "for", data].join(" ");

  it(description, () => {
    expect(sumAllRecursive(data)).toBe(result);
  });
});
