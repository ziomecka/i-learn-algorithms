import { ListNode } from "./list-node";

export function reverseListRecursively(head: ListNode | null): ListNode | null {
  return reverse(head, null);

  function reverse(node: ListNode | null, prev: ListNode | null) {
    if (!node) {
      return node;
    }
    if (!node.next) {
      node.next = prev;

      return node;
    }

    const temp = node.next;
    node.next = prev;

    return reverse(temp, node);
  }
}
