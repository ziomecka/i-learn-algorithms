export interface ListNode<Value = number> {
  value: Value;
  next: ListNode<Value> | null;
}

/**
 *
 * Given a singly linked list of characters, write a function that returns true if the given list is a palindrome, else false.
 *
 * Check if a Singly Linked List is Palindrome by Reversing the Linked List
 */
export function isListPalindromeByReversing<Value>(
  head: ListNode<Value>
): boolean {
  if (!head) {
    return false;
  }

  if (!head.next) {
    return true;
  }

  // NOTE: Find middle of the list
  let slowPointer: ListNode<Value> | null = head;
  let fastPointer: ListNode<Value> | null = head;

  let prevNode: ListNode<Value> | null = slowPointer;

  while (fastPointer && fastPointer.next?.next) {
    prevNode = slowPointer;
    slowPointer = slowPointer?.next || null;
    fastPointer = fastPointer?.next?.next || null;
  }

  if (!slowPointer) {
    return false;
  }

  if (!fastPointer.next && prevNode) {
    prevNode.next = null;
  }

  // NOTE: Reverse second half of the list
  let nextNode: ListNode<Value> | null = null;
  prevNode = null;

  while (slowPointer) {
    nextNode = slowPointer.next;

    slowPointer.next = prevNode;

    prevNode = slowPointer;
    slowPointer = nextNode;
  }

  if (!prevNode) {
    return false;
  }

  // NOTE; Compare first half with the second half
  slowPointer = slowPointer || prevNode;
  fastPointer = head;

  while (slowPointer && fastPointer) {
    {
      if (slowPointer.value !== fastPointer.value) {
        return false;
      }

      if (slowPointer && fastPointer && slowPointer === fastPointer) {
        break;
      }

      slowPointer = slowPointer?.next || null;
      fastPointer = fastPointer?.next || null;
    }
  }

  return !slowPointer?.next && !fastPointer?.next;
}

export class Node<Value = number> implements ListNode<Value> {
  constructor(
    public readonly value: Value,
    public next: ListNode<Value> | null
  ) {}
}

export function isListPalindromeWithStack<Value>(
  head: ListNode<Value>
): boolean {
  if (!head.next) {
    return true;
  }

  const stack: ListNode<Value>[] = [];

  let node: ListNode<Value> | null = head;

  while (node) {
    stack.push(node);
    node = node.next;
  }

  node = head;

  for (let i = stack.length - 1; i >= 0; i--) {
    if (!node) {
      return false;
    }

    if (node.value !== stack[i].value) {
      return false;
    }

    if (i === 0 && node.next) {
      return false;
    }

    node = node?.next;
  }

  return true;
}
