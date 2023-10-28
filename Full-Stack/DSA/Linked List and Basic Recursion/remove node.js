var removeElements = function (head, val) {
  let tmp = head; //storing head in tmp

  //for case of val at start
  while (head) {
    if (head.val == val) {
      head = head.next;
    } else {
      break;
    }
  }

  //value other than head position
  while (tmp != null && tmp.next != null) {
    if (tmp.next.val == val) {
      //next node has value
      tmp.next = tmp.next.next; // storing current next add of next of next node
    } else {
      tmp = tmp.next;
    }
  }
  return head;
};
