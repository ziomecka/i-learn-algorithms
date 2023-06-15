type Data = string | number;

/**
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
 * Note: You can return the array with its elements in any order.
 */
export function diffArray<V extends Data>(arr1: V[], arr2: V[]) {
  const result: V[] = [];

  loop(result, arr1, arr2);
  loop(result, arr2, arr1);

  return result;
}

function loop<V extends Data>(result: V[], arr1: V[], arr2: V[]) {
  return arr1.reduce<V[]>((arr, item) => {
    if (arr2.includes(item) || arr.includes(item)) {
      return arr;
    }

    arr.push(item);

    return arr;
  }, result);
}

export function diffArrayMergedArrays<V extends Data>(arr1: V[], arr2: V[]) {
  return [...arr1, ...arr2].filter(
    (item) => !arr1.includes(item) || !arr2.includes(item)
  );
}

export function diffDeclarative<V extends Data>(arr1: V[], arr2: V[]) {
  return arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));
}
