import { searchInsertPosition } from "./35-search-insert-position";

type Scenario = { data: [nums: number[], target: number]; result: number };
const scenarios: Scenario[] = [
  { data: [[1, 3, 5, 6], 5], result: 2 },
  { data: [[1, 3, 5, 6], 2], result: 1 },
  { data: [[1, 3, 5, 6], 7], result: 4 },
  { data: [[1, 3, 5, 6], 0], result: 0 },
  { data: [[1], 0], result: 0 },
];

describe.each(scenarios)("searchInsertPosition", ({ data, result }) => {
  const description = ["returns", result, "when", JSON.stringify(data)].join(
    " "
  );

  it(description, () => {
    expect(searchInsertPosition(...data)).toBe(result);
  });
});
