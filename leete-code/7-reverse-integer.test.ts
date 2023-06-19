import { findOrderOfInteger, reverseInteger } from "./7-reverse-integer";

type Scenario = { data: number; result: number };

const scenarios: Scenario[] = [
  { data: 1, result: 1 },
  { data: -2, result: -2 },
  { data: 21, result: 12 },
  { data: -21, result: -12 },
  { data: 213, result: 312 },
  { data: 2134, result: 4312 },
  { data: 1534236469, result: 0 },
  { data: 8192, result: 2918 },
  { data: -2147483412, result: -2143847412 },
];

describe.each(scenarios)("reverseInteger", ({ data, result }) => {
  const description = ["returns", result, "when", data].join(" ");

  it(description, () => {
    expect(reverseInteger(data)).toBe(result);
  });
});

type OrderScenario = { data: number; result: number };

const orderScenarios: OrderScenario[] = [
  { data: 1, result: 0 },
  { data: 10, result: 1 },
  { data: 100, result: 2 },
];

describe.each(orderScenarios)("", ({ data, result }) => {
  it("", () => {
    expect(findOrderOfInteger(data)).toBe(result);
  });
});
