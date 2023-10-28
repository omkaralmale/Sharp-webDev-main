var mergeTwoLists = function (list1, list2) {
  let l1 = list1;
  let l2 = list2;
  let sortingll = new ListNode(-1);
  let current = sortingll;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  if (l1 !== null) {
    current.next = l1;
  }
  if (l2 !== null) {
    current.next = l2;
  }
  return sortingll.next;
};
