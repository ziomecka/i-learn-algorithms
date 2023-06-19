export function removeDuplicatesFromSortedArray(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === nums[i]) {
        nums.splice(i, 1);
        j--;
      }
    }
  }

  return nums.length;
}
