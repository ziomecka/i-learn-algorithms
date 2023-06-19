import { addTwoNumbers } from "./2-add-two-numbers";

type Scenario = {
  data: [expectedSum: number, numbers: number[]];
  result: number[][];
};

const scenarios: Scenario[] = [
  {
    data: [1, [0, 1]],
    result: [[0, 1]],
  },
  {
    data: [0, [-1, -2]],
    result: [],
  },
  {
    data: [0, [-1, 1]],
    result: [[-1, 1]],
  },
  {
    data: [0, [1, -1, 1]],
    result: [[-1, 1]],
  },
  {
    data: [0, [1, -1, 1, 2, -2]],
    result: [
      [-2, 2],
      [-1, 1],
    ],
  },
  {
    data: [1, [1, 0, -1, 1, 3, -2]],
    result: [
      [-2, 3],
      [0, 1],
    ],
  },
];

describe.each(scenarios)("addTwoNumbers", ({ data, result }) => {
  const description = [
    "returns",
    JSON.stringify(result),
    "when",
    JSON.stringify(data),
  ].join(" ");

  it(description, () => {
    expect(addTwoNumbers(...data)).toEqual(result);
  });
});
