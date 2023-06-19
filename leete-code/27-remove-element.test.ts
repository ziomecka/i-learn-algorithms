import { removeElement } from "./27-remove-element";

type Scenario = { data: [nums: number[], val: number]; result: number };

const scenarios: Scenario[] = [
  { data: [[3, 2, 2, 3], 3], result: 2 },
  { data: [[0, 1, 2, 2, 3, 0, 4, 2], 2], result: 5 },
];

describe.each(scenarios)("removeElement", ({ data, result }) => {
  const description = ["returns", result, "when", data].join(" ");

  it(description, () => {
    expect(removeElement(...data)).toBe(result);
  });
});
