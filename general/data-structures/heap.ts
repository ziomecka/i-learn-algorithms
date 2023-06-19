export class Heap {
  public readonly heap: number[] = [];

  /**
   *
   * NOTE:
   *
   * Implemented with array
   *
   * @param sortOrder : 1 increasing, -1 decreasing
   */
  constructor(items: number[], private readonly sortOrder: 1 | -1 = 1) {
    items.forEach(this.add, this);
  }

  public get length() {
    return this.heap.length;
  }

  private get n() {
    return Math.floor(Math.log2(this.length + 1));
  }

  private get maxSize() {
    const n = this.n;

    return (1 * (1 - Math.pow(2, n))) / (1 - 2);
  }

  private get last() {
    return this.heap[this.length - 1] || null;
  }

  public add(num: number) {
    this.heap.push(num);

    this.heapify();
  }

  private getParentIndex(nodeIndex: number) {
    if (this.length <= 1) {
      return -1;
    }

    const n = this.n;
    const empty = this.maxSize - n + 1;

    return nodeIndex - (Math.pow(2, n) - empty);
  }

  private heapify() {
    const length = this.length;

    if (length <= 1) {
      return;
    }

    let index = length - 1;

    while (index > -1) {
      index = this.swap(index);
    }
  }

  private swap(childIndex: number): number {
    const parentIndex = this.getParentIndex(childIndex);

    if (
      childIndex === parentIndex ||
      [childIndex, parentIndex].some((value) => value < 0)
    ) {
      return -1;
    }

    const child = this.heap[childIndex];
    const parent = this.heap[parentIndex];

    if (this.sortOrder === 1) {
      if (child >= parent) {
        return -1;
      }

      this.heap[childIndex] = parent;
      this.heap[parentIndex] = child;

      return parentIndex;
    }

    if (this.sortOrder === -1) {
      if (parent >= child) {
        return -1;
      }

      this.heap[childIndex] = parent;
      this.heap[parentIndex] = child;

      return parentIndex;
    }

    return -1;
  }

  public remove(): number | null {
    const length = this.length;

    if (!length) {
      return null;
    }

    if (length <= 1) {
      return this.heap.splice(0, 1)[0] || null;
    }

    const [parent] = this.heap;
    const last = this.last;

    if (last === null) {
      return null;
    }

    this.heap[0] = last;
    this.heap.length = this.heap.length - 1;

    return parent;
  }
}
