import { isPalindrome } from "./is-palindrome";

export function longestPalindromicSubstring(str: string): string {
  return findPalindromicSubstring(str);
}

function findPalindromicSubstring(str: string, result = ""): string {
  for (let i = 0; i < str.length; i++) {
    if (str.length - i + 1 < result.length) {
      break;
    }

    for (let j = str.length; j >= 0; j--) {
      if (i >= j || j - i + 1 < result.length) {
        break;
      }

      const substring = str.slice(i, j);

      if (isPalindrome(substring)) {
        result = substring.length > result.length ? substring : result;
      }
    }
  }

  return result;
}
