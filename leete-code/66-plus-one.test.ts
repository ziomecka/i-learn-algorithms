import { plusOne } from "./66-plus-one";

type Scenario = { data: [number[]]; result: number[] };

const scenarios: Scenario[] = [
  { data: [[1, 2, 3]], result: [1, 2, 4] },
  { data: [[4, 3, 2, 1]], result: [4, 3, 2, 2] },
  { data: [[9]], result: [1, 0] },
  { data: [[9, 9]], result: [1, 0, 0] },
];

describe.each(scenarios)("plusOne", ({ data, result }) => {
  const description = [
    "returns",
    JSON.stringify(result),
    "when",
    JSON.stringify(data),
  ].join(" ");

  it(description, () => {
    expect(plusOne(...data)).toEqual(result);
  });
});
