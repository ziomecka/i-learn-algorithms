import {
  diffArray,
  diffArrayMergedArrays,
  diffDeclarative,
} from "./diff-array";
type Scenario = {
  data: [(number | string)[], (number | string)[]];
  result: (number | string)[];
};

const scenarios: Scenario[] = [
  {
    data: [
      [1, 2],
      [1, 3],
    ],
    result: [2, 3],
  },
  {
    data: [
      [1, 2, 3, 5],
      [1, 2, 3, 4, 5],
    ],
    result: [4],
  },
  {
    data: [
      ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
      ["diorite", "andesite", "grass", "dirt", "dead shrub"],
    ],
    result: ["pink wool"],
  },
];

describe.each(scenarios)("diffArray", ({ data, result }) => {
  it("", () => {
    expect(diffArray(...data)).toEqual(result);
  });
});

describe.each(scenarios)("diffArray", ({ data, result }) => {
  it("", () => {
    expect(diffArrayMergedArrays(...data)).toEqual(result);
  });
});

describe.each(scenarios)("diffArray", ({ data, result }) => {
  it("", () => {
    expect(diffDeclarative(...data)).toEqual(result);
  });
});
