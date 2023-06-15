export function sumAll(arr: number[]) {
  const lower = Math.min(...arr);
  const higher = Math.max(...arr);

  let sum = 0;

  for (let i = lower; i <= higher; i++) {
    sum += i;
  }
  return sum;
}

export function sumAllArithmeticProgression(arr: number[]) {
  const [value1, value2] = arr;

  const count = Math.abs(value1 - value2) + 1;

  return ((value1 + value2) * count) / 2;
}

export function sumAllRecursive(arr: number[], sum = 0) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  if (min === max) {
    return sum + min;
  }

  return sumAllRecursive([min + 1, max], sum + min);
}
