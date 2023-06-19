import { isPalindrome } from "./is-palindrome";

type Scenario = { data: string; result: boolean };

const scenarios: Scenario[] = [
  { data: "a", result: true },
  { data: "aba", result: true },
  { data: "aa", result: true },
  { data: "adaa", result: false },
];

describe.each(scenarios)("isPalindrome", ({ data, result }) => {
  const description = ["returns", result, "for", data].join(" ");

  it(description, () => {
    const is = isPalindrome(data);
    expect(is).toBe(result);
  });
});
