import { ListNode } from "../general/reverse-list/list-node";

/**
 *
 * Note: Try to solve this task in O(list size) time using O(1) additional space,
 * since this is what you'll be asked during an interview.
 * Given a singly linked list of integers l and a non-negative integer n,
 * move the last n list nodes to the beginning of the linked list.
 *
 * https://app.codesignal.com/interview-practice/question/5vcioHMkhGqkaQQYt/description
 */
export function rearrangeLastN(l: ListNode, n: number) {
  let count = n - 1;
  let initialNode: ListNode | null = null;
  let node: ListNode | null = l;
  let prev: ListNode | null = l;

  while (count--) {
    if (!node?.next) {
      return l;
    }

    node = node.next;
  }

  while (node.next) {
    prev = prev?.next || null;
    node = node.next;
    initialNode = count-- === -1 ? l : initialNode ? initialNode.next : null;
  }

  if (prev !== l) {
    node.next = l;

    if (initialNode) {
      initialNode.next = null;
    }
  }

  return prev;
}
