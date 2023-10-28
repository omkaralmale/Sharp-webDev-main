var detectCycle = function (head) {
  let Head = head;
  let Tail = head;
  let start = head;
  while (Head && Tail && Tail.next) {
    Head = Head.next;
    Tail = Tail.next.next;
    if (Head === Tail) {
      while (start != Tail) {
        Tail = Tail.next;
        start = start.next;
      }
      return Tail;
    }
  }
  return null;
};
