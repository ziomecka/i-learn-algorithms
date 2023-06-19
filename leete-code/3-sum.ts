export function sum3(expectedSum: number, numbers: number[]) {
  const result: number[][] = [];

  const { length } = numbers;

  if (length < 3) {
    return result;
  }

  numbers = numbers.sort((first, second) => first - second);

  for (let i = 0; i < length; i++) {
    const first = numbers[i];

    for (let j = i + 1; j < length; j++) {
      const second = numbers[j];

      for (let k = j + 1; k < length; k++) {
        const third = numbers[k];

        const triple = [first, second, third];
        if (first + second + third === expectedSum) {
          if (!contains(result)(triple)) {
            result.push(triple);
          }
        }
      }
    }
  }

  return result;
}

function isEqual([first, second, third]: number[]) {
  return (arr: number[]) => {
    if (arr[0] !== first) {
      return false;
    }

    if (arr[1] !== second) {
      return false;
    }

    if (arr[2] !== third) {
      return false;
    }

    return true;
  };
}

function contains(result: number[][]) {
  return (arr: number[]) => {
    let value = false;

    for (let i = 0; i < result.length; i++) {
      if (result[i][0] > arr[0]) {
        break;
      }

      if (isEqual(result[i])(arr)) {
        value = true;
        break;
      }
    }

    return value;
  };
}
