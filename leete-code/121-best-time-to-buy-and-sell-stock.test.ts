import { bestTimeToBuyAndSellStock } from "./121-best-time-to-buy-and-sell-stock";

type Scenario = {
  data: Parameters<typeof bestTimeToBuyAndSellStock>;
  result: ReturnType<typeof bestTimeToBuyAndSellStock>;
};

const scenarios: Scenario[] = [
  { data: [[7, 1, 5, 3, 6, 4]], result: 5 },
  { data: [[7, 6, 4, 3, 1]], result: 0 },
];

describe.each(scenarios)("", ({ data, result }) => {
  it("", () => {
    expect(bestTimeToBuyAndSellStock(...data)).toEqual(result);
  });
});
