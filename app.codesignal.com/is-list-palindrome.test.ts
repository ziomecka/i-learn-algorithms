import {
  ListNode,
  Node,
  isListPalindromeByReversing,
} from "./is-list-palindrome";

type Scenario<Value> = { data: [ListNode<Value>]; result: boolean };

const scenarios: Scenario<number>[] = [
  {
    data: [
      [5].reduceRight<ListNode<number>>(
        reducer(),
        null as unknown as ListNode<number>
      ),
    ],
    result: true,
  },
  {
    data: [
      [1, 2, 1].reduceRight<ListNode<number>>(
        reducer(),
        null as unknown as ListNode<number>
      ),
    ],
    result: true,
  },
  {
    data: [
      [1, 2, 3].reduceRight<ListNode<number>>(
        reducer(),
        null as unknown as ListNode<number>
      ),
    ],
    result: false,
  },
  {
    data: [
      [1, 2, 3, 3, 2, 1].reduceRight<ListNode<number>>(
        reducer(),
        null as unknown as ListNode<number>
      ),
    ],
    result: true,
  },
  {
    data: [
      [1, 2, -2, 1].reduceRight<ListNode<number>>(
        reducer(),
        null as unknown as ListNode<number>
      ),
    ],
    result: false,
  },
  {
    data: [
      [1, -2, 4, -2, 1].reduceRight<ListNode<number>>(
        reducer(),
        null as unknown as ListNode<number>
      ),
    ],
    result: true,
  },
];

describe.each(scenarios)("isListPalindromeByReversing", ({ data, result }) => {
  const description = ["returns", result, "when", JSON.stringify(data)].join(
    " "
  );

  it(description, () => {
    expect(isListPalindromeByReversing(...data)).toBe(result);
  });
});

function reducer<Value>() {
  return (node: ListNode<Value> | null, value: Value) => {
    const prev = new Node(value, null);

    if (node) {
      prev.next = node;
    }

    return prev;
  };
}
