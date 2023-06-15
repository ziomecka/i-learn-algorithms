type Data = string | null;

export function zigZagConversion(str: string, rowsNum: number): string {
  return readMatrix(zigZagMatrix(str, rowsNum));
}

function zigZagMatrix(str: string, rowsNum: number): Data[][] {
  function recursive(index: number, result: Data[][] = []): Data[][] {
    if (!rowsNum) {
      return result;
    }

    if (rowsNum === 1) {
      result.push([...str]);
      return result;
    }

    if (str.length <= rowsNum) {
      result.push([...str]);

      return result;
    }

    if (index >= str.length) {
      return result;
    }

    if (!index) {
      result.push([...str.slice(0, rowsNum)]);

      return recursive(rowsNum, result);
    }

    const previousColumn = result[result.length - 1];
    const prevIndex = previousColumn.findIndex(isNotNull());

    if (prevIndex === -1) {
      return result;
    }

    let nextColumn: Data[] = Array.from<Data>({ length: rowsNum }).fill(null);

    if (rowsNum === 2) {
      nextColumn = [...str.slice(index, index + rowsNum)];
      index += rowsNum;
    } else if (isCompleteColumn(previousColumn, rowsNum)) {
      nextColumn[Math.max(rowsNum - 2, 0)] = str.slice(index, ++index);
    } else if (prevIndex === 1) {
      nextColumn = [...str.slice(index, rowsNum + index)];
      index += rowsNum;
    } else {
      nextColumn[Math.max(prevIndex - 1, 0)] = str.slice(index, ++index);
    }

    result.push(nextColumn);

    return recursive(index, result);
  }

  return recursive(0) as Data[][];
}

function isNotNull<I>() {
  return (item: I) => item !== null;
}

function isCompleteColumn(column: Data[], rowsNum: number) {
  const { length } = column.filter(isNotNull());

  return length === rowsNum;
}

export function readMatrix(matrix: Data[][]): string {
  const { length: columnsNum } = matrix;
  let str = "";

  if (!columnsNum) {
    return str;
  }

  const { length: rowsNum } = matrix[0];

  for (let row = 0; row < rowsNum; row++) {
    for (let column = 0; column < columnsNum; column++) {
      str += matrix[column][row] || "";
    }
  }

  return str;
}
