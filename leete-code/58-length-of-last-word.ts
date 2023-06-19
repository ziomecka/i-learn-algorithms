/**
 *
 * NOTE:
 *
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal
 * substring
 * consisting of non-space characters only.
 */
export function lengthOfLastWord(str: string): number {
  str = str.trim();

  let { length } = str;

  for (let i = length - 1; i >= 0; i--) {
    if (/\s/.test(str[i])) {
      length = length - i - 1;

      break;
    }
  }

  return length;
}
