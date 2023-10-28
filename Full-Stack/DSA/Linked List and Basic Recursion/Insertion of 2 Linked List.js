var getIntersectionNode = function (headA, headB) {
  let lenA = 0;
  let lenB = 0;
  let tempA = headA;
  let tempB = headB;
  while (tempA != null) {
    lenA++;
    tempA = tempA.next;
  }
  while (tempB != null) {
    lenB++;
    tempB = tempB.next;
  }
  let diff = Math.abs(lenA - lenB);
  tempA = headA;
  tempB = headB;
  if (lenA > lenB) {
    for (let index = 0; index < diff; index++) {
      tempA = tempA.next;
    }
  } else {
    for (let index = 0; index < diff; index++) {
      tempB = tempB.next;
    }
  }
  while (tempA && tempB) {
    if (tempA == tempB) {
      return tempA;
    }
    tempA = tempA.next;
    tempB = tempB.next;
  }
  return null;
};
