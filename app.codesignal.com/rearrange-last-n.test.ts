import { ListNode } from "../general/reverse-list/list-node";
import { rearrangeLastN } from "./rearrange-last-n";

type Scenario = {
  data: Parameters<typeof rearrangeLastN>;
  result: ReturnType<typeof rearrangeLastN>;
};

const scenarios: Scenario[] = [
  { data: [new ListNode(1), 1], result: new ListNode(1) },
  {
    data: [new ListNode(1, new ListNode(2)), 1],
    result: new ListNode(2, new ListNode(1)),
  },
  {
    data: [new ListNode(1, new ListNode(2, new ListNode(3))), 2],
    result: new ListNode(2, new ListNode(3, new ListNode(1))),
  },
  {
    data: [
      new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
      ),
      3,
    ],
    result: new ListNode(
      3,
      new ListNode(4, new ListNode(5, new ListNode(1, new ListNode(2))))
    ),
  },
  {
    data: [
      new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
      ),
      6,
    ],
    result: new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    ),
  },
];

describe.each(scenarios)("rearrangeLastN", ({ data, result }) => {
  const description = [
    "returns",
    JSON.stringify(result),
    "when",
    JSON.stringify(data),
  ].join(" ");

  it(description, () => {
    expect(rearrangeLastN(...data)).toEqual(result);
  });
});
