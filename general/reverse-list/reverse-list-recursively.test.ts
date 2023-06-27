import { ListNode } from "./list-node";
import { reverseListRecursively } from "./reverse-list-recursively";

type Scenario = { data: [ListNode | null]; result: number[] };

const arrays: number[][] = [[1], [1, 5, 4, 7]];

const scenarios: Scenario[] = arrays.map<Scenario>((arr) => ({
  data: [
    arr.reduceRight<ListNode | null>((next, value) => {
      const node = new ListNode(value);
      node.next = next;
      return node;
    }, null),
  ],
  result: arr.reverse(),
}));

describe.each(scenarios)("reverseListRecursively", ({ data, result }) => {
  const description = ["returns", result, "when", JSON.stringify(data)].join(
    " "
  );

  it(description, () => {
    const reversed = reverseListRecursively(...data);

    expect(reversed ? reversed.toJSON() : reversed).toEqual(result);
  });
});
