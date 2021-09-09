const reverseKGroup = (head, k) => {
  let curr = head;
  let i = 0;
  while (curr != null && i != k) {
    curr = curr.next;
    i++;
  }
  if (i === k) {
    curr = reverseKGroup(curr, k);
    while (i-- > 0) {
      const temp = head.next;
      head.next = curr;
      curr = head;
      head = temp;
    }
    head = curr;
  }
  return head;
};

export default reverseKGroup;

