import { destroyer } from "./destroyer";

type Scenario = { data: [any[], ...any[]]; result: any[] };

const scenarios: Scenario[] = [
  {
    data: [[1, 2, 3, 1, 2, 3], 2, 3],
    result: [1, 1],
  },
];

describe.each(scenarios)("", ({ data, result }) => {
  it("", () => {
    expect(destroyer(...data)).toEqual(result);
  });
});
