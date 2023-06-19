import { removeDuplicatesFromSortedArray } from "./26-remove-duplicates-from-sorted-array";

type Scenario = { data: number[]; result: number };

const scenarios: Scenario[] = [
  { data: [], result: 0 },
  { data: [1, 1], result: 1 },
  { data: [1, 2, 1], result: 2 },
  { data: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], result: 5 },
];

describe.each(scenarios)(
  "removeDuplicatesFromSortedArray",
  ({ data, result }) => {
    it("", () => {
      expect(removeDuplicatesFromSortedArray(data)).toBe(result);
    });
  }
);
