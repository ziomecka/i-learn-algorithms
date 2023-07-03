/**
 * NOTE: Given two binary strings a and b, return their sum as a binary string.
 *
 * https://leetcode.com/problems/add-binary/
 *
 */
export function addBinary(a: string, b: string): string {
  return add([...a], [...b]).join("");

  function add(a: string[], b: string[]): string[] {
    return carry([], 0);

    function carry(result: string[], value: 1 | 0): string[] {
      if (!a.length && !b.length) {
        if (value) {
          result.unshift("" + value);
        }

        return result;
      }

      const lastA = a.splice(a.length - 1, 1);
      const lastB = b.splice(b.length - 1, 1);

      const sum = Number(lastA) + Number(lastB) + value;

      value = (sum % 2) as 0 | 1;

      const digit = Math.floor(sum / 2);

      result.unshift("" + value);

      return carry(result, digit as 1 | 0);
    }
  }
}
