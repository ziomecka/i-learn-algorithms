/**
 * NOTE:
 *
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 */
export function searchInsertPosition(nums: number[], target: number): number {
  return search(0, nums.length - 1);

  function search(startIndex: number, endIndex: number): number {
    if (endIndex < startIndex) {
      return -1;
    }

    if (endIndex === startIndex) {
      if (nums[endIndex] === target) {
        return endIndex;
      }

      return nums[endIndex] < target ? endIndex + 1 : Math.max(0, endIndex - 1);
    }

    if (endIndex - startIndex === 1) {
      if (nums[startIndex] === target) {
        return startIndex;
      }

      if (nums[endIndex] === target) {
        return endIndex;
      }

      if (nums[startIndex] > target) {
        return Math.max(0, startIndex - 1);
      }

      if (nums[endIndex] < target) {
        return endIndex + 1;
      }
    }

    const middle = startIndex + Math.round((endIndex - startIndex) / 2);

    const value = nums[middle];

    const nextValue = nums[middle + 1];
    const prevValue = middle ? nums[middle - 1] : undefined;

    if (value === target) {
      return middle;
    }

    if (value > target) {
      if (prevValue === undefined || prevValue < target) {
        return middle;
      }

      startIndex = startIndex;
      endIndex = middle;
    } else {
      if (nextValue === undefined || nextValue > target) {
        return middle + 1;
      }

      startIndex = middle;
      endIndex = endIndex;
    }

    return search(startIndex, endIndex);
  }
}
