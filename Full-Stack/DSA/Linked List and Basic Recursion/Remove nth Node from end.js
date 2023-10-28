var removeNthFromEnd = function (head, n) {
  let newll = new ListNode(0);
  newll.next = head;
  let first = newll;
  let second = newll;

  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return newll.next;
};
