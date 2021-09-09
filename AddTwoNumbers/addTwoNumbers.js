import { LinkedList, ListNode } from '../lib/dataStructures.js';

const addTwoNumbers = (l1, l2) => {
  let p1 = l1;
  let p2 = l2;
  let sum = new ListNode();
  let sumHead = sum;
  let carryover = 0;

  while (carryover !== 0 || p1 || p2) {
    const total = (sum?.val || 0) + (p1?.val || 0) + (p2?.val || 0) + carryover;
    const digitSum = total % 10;
    carryover = (total - digitSum) / 10;
    sum.val = digitSum;

    if (carryover === 0 && !p1?.next && !p2?.next) {
      return sumHead;
    }

    sum.next = new ListNode(carryover);
    sum = sum.next;
    p1 = p1?.next ? p1.next : null;
    p2 = p2?.next ? p2.next : null;
    carryover = 0;
  }
  return sumHead;
};

export default addTwoNumbers;
