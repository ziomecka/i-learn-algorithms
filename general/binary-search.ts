export function findIntegerWithBinarySearch(
  integer: number,
  initialArr: number[]
) {
  const sorted = initialArr.sort((first, second) => first - second);

  return search(0, sorted.length - 1);

  function search(startIndex: number, endIndex: number): null | number {
    if (startIndex > endIndex) {
      return null;
    }

    if (endIndex === startIndex) {
      return sorted[endIndex] === integer ? integer : null;
    }

    if (endIndex - startIndex === 1) {
      return sorted[startIndex] === integer
        ? integer
        : sorted[endIndex] === integer
        ? integer
        : null;
    }

    const middle = Math.round((endIndex - startIndex) / 2);

    const arr = initialArr.slice(startIndex, startIndex + middle);

    const max = arr[arr.length - 1];

    if (max === integer) {
      return integer;
    }

    return max < integer
      ? search(startIndex + middle, endIndex)
      : search(startIndex, startIndex + middle);
  }
}
