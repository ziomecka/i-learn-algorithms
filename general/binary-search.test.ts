import { findIntegerWithBinarySearch } from "./binary-search";

type Scenario = { data: [number, number[]]; result: number | null };

const scenarios: Scenario[] = [
  {
    data: [-2, [-1, -2]],
    result: -2,
  },
  {
    data: [-2, [-1, 3, -2, 2]],
    result: -2,
  },
  {
    data: [4, [-1, 3, -2, 2]],
    result: null,
  },
  {
    data: [6, [-1, 3, -2, 2]],
    result: null,
  },
  {
    data: [10, [-1, 3, -2, 2]],
    result: null,
  },
  {
    data: [3, [-1, 3, -2, 2]],
    result: 3,
  },
  {
    data: [1, [-1, 1]],
    result: 1,
  },
  {
    data: [1, [-1, 1, 2]],
    result: 1,
  },
];

describe.each(scenarios)("findIntegerWithBinarySearch", ({ data, result }) => {
  const description = [
    "returns",
    result === null ? "null" : result,
    "when",
    data,
  ].join(" ");

  it(description, () => {
    expect(findIntegerWithBinarySearch(...data)).toEqual(result);
  });
});
