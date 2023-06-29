import { ListNode } from "../general/reverse-list/list-node";
import { mergeTwoLinkedLists } from "./merge-two-linked-lists";

type Scenario = {
  data: Parameters<typeof mergeTwoLinkedLists>;
  result: ReturnType<typeof mergeTwoLinkedLists>;
};

const scenarios: Scenario[] = [
  {
    data: [null, null],
    result: null,
  },
  {
    data: [null, new ListNode(-1)],
    result: new ListNode(-1),
  },
  {
    data: [
      new ListNode(-1, new ListNode(2, new ListNode(4))),
      new ListNode(-2, new ListNode(5)),
    ],
    result: new ListNode(
      -2,
      new ListNode(-1, new ListNode(2, new ListNode(4, new ListNode(5))))
    ),
  },
];

describe.each(scenarios)("mergeTwoLinkedLists", ({ data, result }) => {
  const description = ["returns", result, "when", JSON.stringify(data)].join(
    " "
  );

  it(description, () => {
    expect(mergeTwoLinkedLists(...data)).toEqual(result);
  });
});
