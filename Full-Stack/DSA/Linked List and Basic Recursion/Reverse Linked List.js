var reverseList = function (head) {
  if (head == null || head.next == null) return head;
  let prev = null;
  let temp = head;
  while (temp != null) {
    let next_node = temp.next;
    temp.next = prev;
    prev = temp;
    temp = next_node;
  }
  return prev;
};
