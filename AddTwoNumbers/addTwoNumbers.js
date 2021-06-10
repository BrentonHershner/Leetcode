export function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const buildList = (arr) => {
  let list = new ListNode();
  const head = list;
  arr.forEach((val, i) => {
    list.val = val;
    if (arr[i + 1] !== undefined) {
      list.next = new ListNode();
      list = list.next;
    }
  })
  return head;
}

const addTwoNumbers = (l1, l2) => {
  // console.log(l1.val);
  // console.log(l2.val);
  let current1 = l1;
  let current2 = l2;
  let p1 = l1;
  let p2 = l2;
  let sum = new ListNode();
  let sumHead = sum;

  let carryover = 0;

  while (carryover !== 0 || p1 || p2) {
    const total = (sum?.val || 0) + (p1?.val || 0) + (p2?.val || 0) + carryover;
    // console.log('carryover', carryover);
    // console.log('p1.val', p1.val);
    // console.log('p2.val', p2.val);

    const digitSum = total % 10;
    // console.log('digitSum', digitSum);

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

// console.log(addTwoNumbers(buildList([1]), buildList([1, 2])).val);

export default addTwoNumbers;
