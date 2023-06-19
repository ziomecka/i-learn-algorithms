import { lengthOfLastWord } from "./58-length-of-last-word";

type Scenario = { data: [string]; result: number };

const scenarios: Scenario[] = [
  { data: [""], result: 0 },
  { data: ["a"], result: 1 },
  { data: ["Hello World"], result: 5 },
  { data: ["   fly me   to   the moon  "], result: 4 },
];

describe.each(scenarios)("lengthOfLastWord", ({ data, result }) => {
  const description = ["returns", result, "when", `"${data}"`].join(" ");

  it(description, () => {
    expect(lengthOfLastWord(...data)).toBe(result);
  });
});
