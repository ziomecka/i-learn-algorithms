import { findIndexOfFirstOccurrence } from "./28-find-index-of-the-first-occurence";

type Scenario = { data: [haystack: string, needle: string]; result: number };

const scenarios: Scenario[] = [
  { data: ["sadbutsad", "sad"], result: 0 },
  { data: ["leetcode", "code"], result: 4 },
];

describe.each(scenarios)("findIndexOfFirstOccurrence", ({ data, result }) => {
  const description = ["returns", result, "when", data].join(" ");

  it(description, () => {
    expect(findIndexOfFirstOccurrence(...data)).toBe(result);
  });
});
