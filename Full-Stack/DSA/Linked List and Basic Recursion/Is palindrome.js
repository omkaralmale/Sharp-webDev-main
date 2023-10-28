var isPalindrome = function (head) {
  if (!head) return true;
  let slow = head;
  let fast = head;
  let prev = null;
  while (fast && fast.next) {
    fast = fast.next.next;
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }
  if (fast) {
    slow = slow.next;
  }
  while (prev && prev.val === slow.val) {
    prev = prev.next;
    slow = slow.next;
  }
  return prev === null;
};
