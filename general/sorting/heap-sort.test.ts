import { heapSort } from "./heap-sort";

type Scenario = { data: [number[]]; result: number[] };

const scenarios: Scenario[] = [
  { data: [[]], result: [] },
  { data: [[1]], result: [1] },
  { data: [[2, 1]], result: [1, 2] },
  { data: [[2, 3, 1]], result: [1, 2, 3] },
];

describe.each(scenarios)("heapSort", ({ result, data }) => {
  const description = [
    "returns",
    JSON.stringify(data),
    "when",
    JSON.stringify(result),
  ].join(" ");

  it(description, () => {
    expect(heapSort(...data)).toEqual(result);
  });
});
