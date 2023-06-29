import { ListNode } from "../general/reverse-list/list-node";

/**
 * NOTE:
 *
 * Note: Your solution should have O(l1.length + l2.length) time complexity,
 * since this is what you will be asked to accomplish in an interview.
 *
 * Given two singly linked lists sorted in non-decreasing order, your task is to merge them.
 * In other words, return a singly linked list, also sorted in non-decreasing order,
 * that contains the elements from both original lists.
 */
export function mergeTwoLinkedLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  return merge(l1, l2, null, null);
}

function merge(
  l1: ListNode | null,
  l2: ListNode | null,
  prev: ListNode | null,
  head: ListNode | null
) {
  const [lower, higher] = compare(l1, l2);

  if (!head) {
    head = lower;
  }

  if (!lower && !higher) {
    return head;
  }

  if (prev) {
    prev.next = lower;
  }

  return merge(lower?.next || null, higher, lower, head);
}

function compare(
  l1: ListNode | null,
  l2: ListNode | null
): (ListNode | null)[] {
  if (!l1) {
    return [l2];
  }

  if (!l2) {
    return [l1];
  }

  return l2.value < l1.value ? [l2, l1] : [l1, l2];
}
