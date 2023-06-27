export class ListNode<Value = number> {
  constructor(
    public readonly value: number,
    public next: ListNode<Value> | null = null
  ) {}

  public toJSON() {
    let node: ListNode | null = this;
    let arr: number[] = [];

    while (node) {
      arr.push(node.value);
      node = node.next;
    }

    return arr;
  }
}
