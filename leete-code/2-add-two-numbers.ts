import { findIntegerWithBinarySearch } from "../general";

export function addTwoNumbers(
  expectedSum: number,
  numbers: number[]
): number[][] {
  let result: number[][] = [];

  const { length } = numbers;

  if (length < 2) {
    return result;
  }

  const sorted = numbers.sort((first, second) => first - second);

  const [min] = sorted;

  if (min > expectedSum) {
    return result;
  }

  for (let i = 0; i < length; i++) {
    const item = sorted[i];
    const expected = -item + expectedSum;

    const foundInteger = findIntegerWithBinarySearch(
      expected,
      i + 1 < length ? sorted.slice(i + 1) : []
    );

    if (foundInteger !== null) {
      if (!result.length) {
        result.push([item, foundInteger]);
      } else if (result[result.length - 1][1] !== foundInteger) {
        result.push([item, foundInteger]);
      }
    }
  }

  return result;
}
