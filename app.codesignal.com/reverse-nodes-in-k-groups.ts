import { ListNode } from "../general/reverse-list/list-node";

/**
 *
 * NOTE:
 *
 * Note: Your solution should have O(n) time complexity,
 * where n is the number of elements in l, and O(1) additional space complexity,
 * since this is what you would be asked to accomplish in an interview.
 * Given a linked list l, reverse its nodes k at a time and return the modified list.
 * k is a positive integer that is less than or equal to the length of l.
 * If the number of nodes in the linked list is not a multiple of k, then the nodes that are left out at the end should remain as-is.
 * You may not alter the values in the nodes - only the nodes themselves can be changed.
 *
 * https://app.codesignal.com/interview-practice/question/XP2Wn9pwZW6hvqH67/description
 */
export function reverseNodesInKGroups(next: ListNode | null, k: number) {
  let node: ListNode | null = null;
  let initialNode: ListNode | null = node;
  let prev: ListNode | null = null;

  while (next) {
    let nextPrev = next;

    const result = reverseTimes(next, k);

    ({ node, next } = result);

    if (prev) {
      prev.next = node;
    }

    prev = nextPrev;

    if (!initialNode) {
      initialNode = node;
    }
  }

  return initialNode;
}

function reverseTimes(
  next: ListNode | null,
  k: number,
  node: ListNode | null = null
) {
  let initial = k;

  while (k--) {
    ({ next, node } = reverseList(next, node));

    if (!next && k) {
      return reverseTimes(node, initial - k);
    }
  }

  return { next, node };
}

function reverseList(node: ListNode | null, prev: ListNode | null = null) {
  const next = node?.next || null;

  if (node) {
    node.next = prev;
  }

  return { next: next || null, node: node || null };
}
