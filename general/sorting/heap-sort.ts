import { Heap } from "../data-structures";

export function heapSort(numbers: number[]): number[] {
  const heap = new Heap(numbers);

  const result: number[] = [];

  while (heap.length) {
    const removed = heap.remove();

    if (removed !== null) {
      result.push(removed);
    }
  }

  return result;
}
