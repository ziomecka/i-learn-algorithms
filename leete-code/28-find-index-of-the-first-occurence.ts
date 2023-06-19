/**
 * NOTE:
 *
 * Given two strings needle and haystack,
 * return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */
export function findIndexOfFirstOccurrence(
  haystack: string,
  needle: string
): number {
  let result = -1;

  const { length } = needle;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.length - i + 1 < length) {
      break;
    }

    for (let j = 0; j < length; j++) {
      if (needle[j] !== haystack[i + j]) {
        break;
      }

      if (j === length - 1) {
        result = i;
      }
    }

    if (result !== -1) {
      break;
    }
  }

  return result;
}
