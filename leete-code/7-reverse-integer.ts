// 3241
// 1423

// 8192

const pow = Math.pow(2, 31);

export function reverseInteger(integer: number): number {
  const isNegative = integer < 0;

  integer = Math.abs(integer);
  const order = findOrderOfInteger(integer);

  let result = 0;

  for (let i = order; i >= 0; i--) {
    let value = Math.floor(integer / Math.pow(10, i));

    integer = integer % Math.pow(10, i);

    result += value * Math.pow(10, order - i);

    if (result / pow > 1) {
      result = 0;
      break;
    }
  }

  return isNegative ? result * -1 : result;
}

export function findOrderOfInteger(integer: number) {
  let x = 0;

  while (integer / Math.pow(10, x) >= 10) {
    x++;
  }

  return x;
}
