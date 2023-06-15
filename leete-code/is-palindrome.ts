export function isPalindrome(str: string): boolean {
  const { length } = str;

  let result = true;

  if (length === 1) {
    return result;
  }

  const steps = Math.floor(length / 2);

  for (let i = steps; i >= 0; i--) {
    if (str[i] !== str[length - 1 - i]) {
      result = false;
      break;
    }
  }

  return result;
}
