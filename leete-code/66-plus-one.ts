/**
 *
 * NOTE:
 *
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
 * The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
 */
export function plusOne(digits: number[]): number[] {
  return incrementByOne(digits.length - 1);

  function incrementByOne(index: number) {
    const result = digits[index] + 1;

    if (result > 9) {
      digits[index--] = 0;

      if (index >= 0) {
        return incrementByOne(index);
      }

      digits.unshift(1);

      return digits;
    }

    digits[index] = result;

    return digits;
  }
}
