import { whereforeArtThou } from "./wherefore-art-thou";

type Scenario = { data: [any[], any]; result: any[] };

const scenarios: Scenario[] = [
  {
    data: [
      [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" },
      ],
      { last: "Capulet" },
    ],
    result: [{ first: "Tybalt", last: "Capulet" }],
  },
];

describe.each(scenarios)("whereforeArtThou", ({ data, result }) => {
  it("", () => {
    expect(whereforeArtThou(...data)).toEqual(result);
  });
});
