export function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

export class LinkedList {
  constructor(values = []) {
    let next;
    for (let i = values.length - 1; i >= 0; i--) {
      const curr = new ListNode(values[ i ], next);
      next = curr;
      if (i === 0) { this.head = curr; }
    }
  }

  get values() {
    const values = [];
    let curr = this.head;
    while (curr.next) {
      values.push(curr.val);
      curr = curr.next;
    };
    values.push(curr.val);

    return values;
  }
}
