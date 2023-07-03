import { ListNode } from "../general/reverse-list/list-node";
import { reverseNodesInKGroups } from "./reverse-nodes-in-k-groups";

type Scenario = {
  data: Parameters<typeof reverseNodesInKGroups>;
  result: ReturnType<typeof reverseNodesInKGroups>;
};

const scenarios: Scenario[] = [
  {
    data: [new ListNode(1), 1],
    result: new ListNode(1),
  },
  {
    data: [new ListNode(1), 2],
    result: new ListNode(1),
  },
  {
    data: [new ListNode(1, new ListNode(2)), 1],
    result: new ListNode(1, new ListNode(2)),
  },
  {
    data: [
      new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))),
      2,
    ],
    result: new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(3)))),
  },
];

describe.each(scenarios)("reverseNodesInKGroups", ({ data, result }) => {
  it("", () => {
    expect(reverseNodesInKGroups(...data)).toEqual(result);
  });
});
