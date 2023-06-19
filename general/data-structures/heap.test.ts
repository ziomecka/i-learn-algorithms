import { Heap } from "./heap";

type CreateScenario = {
  data: [items: number[], order: 1 | -1];
  result: number[];
};

type RemoveScenario = {
  data: [items: number[], order: 1 | -1];
  result: { heap: number[]; removed: number | null };
};

const createScenarios: CreateScenario[] = [
  { data: [[], 1], result: [] },
  { data: [[1], 1], result: [1] },
  { data: [[2], 1], result: [2] },
  { data: [[2, 1], 1], result: [1, 2] },
  { data: [[1, 2], -1], result: [2, 1] },
];

const removeScenarios: RemoveScenario[] = [
  { data: [[], 1], result: { heap: [], removed: null } },
  { data: [[1], 1], result: { heap: [], removed: 1 } },
  { data: [[2], 1], result: { heap: [], removed: 2 } },
  { data: [[2, 1], 1], result: { heap: [2], removed: 1 } },
  { data: [[1, 2], -1], result: { heap: [1], removed: 2 } },
];

describe.each(createScenarios)("heap", ({ data, result }) => {
  const description = [
    "creates heap",
    JSON.stringify(result),
    "when",
    JSON.stringify(data),
  ].join(" ");

  it(description, () => {
    const heap = new Heap(...data);

    expect(heap.heap).toEqual(result);
  });
});

describe.each(removeScenarios)("heap", ({ data, result }) => {
  const description = [
    "returns after remove",
    JSON.stringify(result),
    "when",
    JSON.stringify(data),
  ].join(" ");

  it(description, () => {
    const heap = new Heap(...data);

    const removed = heap.remove();

    expect(removed).toBe(result.removed);
    expect(heap.heap).toEqual(result.heap);
  });
});
