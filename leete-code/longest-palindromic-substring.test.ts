import { longestPalindromicSubstring } from "./longest-palindromic-substring";

type Scenario = { data: string; result: string[] };
const scenarios: Scenario[] = [
  {
    data: "babad",
    result: ["bab", "aba"],
  },
  {
    data: "cbbd",
    result: ["bb"],
  },
  {
    data: "ccd",
    result: ["cc"],
  },
];

describe.each(scenarios)("longestPalindromicSubstring", ({ data, result }) => {
  it("", () => {
    expect(result).toContain(longestPalindromicSubstring(data));
  });
});
