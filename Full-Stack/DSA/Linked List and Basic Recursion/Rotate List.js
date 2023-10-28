var rotateRight = function (head, k) {
  if (!head || k === 0) {
    return head;
  }

  let length = 1,
    tail = head;
  while (tail.next) {
    length++;
    tail = tail.next;
  }

  k = k % length;
  if (k === 0) {
    return head;
  }

  let newTail = head;
  for (let i = 0; i < length - k - 1; i++) {
    newTail = newTail.next;
  }

  let newHead = newTail.next;
  newTail.next = null;
  tail.next = head;
  return newHead;
};
