import { jest } from '@jest/globals';
import { LinkedList, ListNode } from '../lib/dataStructures.js';
import addTwoNumbers from './addTwoNumbers';

const buildList = (arr) => {
  let list = new ListNode();
  const head = list;
  arr.forEach((val, i) => {
    list.val = val;
    if (arr[i+1] !== undefined){
      list.next = new ListNode();
      list = list.next;
    }
  })
  return head;
}

describe('addTwoNumbers', () => {
  test('return zero', () => {
    const p1 = new LinkedList([0]);
    const p2 = new LinkedList([0]);
    const expected = new LinkedList([0]);
    expect(addTwoNumbers(p1.head, p2.head)).toStrictEqual(expected.head);
  });
  
  test('single digits', () => {
    const p1 = new LinkedList([1]);
    const p2 = new LinkedList([4]);
    const expected = new LinkedList([5]);
    expect(addTwoNumbers(p1.head, p2.head)).toStrictEqual(expected.head);
  });
  
  test('multiple digits, no remainder', () => {
    let p1 = new LinkedList([1]);
    let p2 = new LinkedList([1,2]);
    let expected = new LinkedList([2,2]);
    expect(addTwoNumbers(p1.head, p2.head)).toStrictEqual(expected.head);
    
    p1 = new LinkedList([1]);
    p2 = new LinkedList([3,2,1]);
    expected = new LinkedList([4,2,1]);
    expect(addTwoNumbers(p1.head, p2.head)).toStrictEqual(expected.head);
    
    p1 = new LinkedList([3,2,1]);
    p2 = new LinkedList([3,2,1]);
    expected = new LinkedList([6,4,2]);
    expect(addTwoNumbers(p1.head, p2.head)).toStrictEqual(expected.head);
  });
  
  test('multiple digits, with remainder', () => {
    let p1 = new LinkedList([8]);
    let p2 = new LinkedList([8]);
    let expected = new LinkedList([6,1]);
    expect(addTwoNumbers(p1.head, p2.head)).toStrictEqual(expected.head);

    p1 = new LinkedList([2,4,3]);
    p2 = new LinkedList([5,6,4]);
    expected = new LinkedList([7,0,8]);
    expect(addTwoNumbers(p1.head, p2.head)).toStrictEqual(expected.head);

    p1 = new LinkedList([9, 9, 9, 9, 9, 9, 9]);
    p2 = new LinkedList([9, 9, 9, 9]);
    expected = new LinkedList([8, 9, 9, 9, 0, 0, 0, 1]);
    expect(addTwoNumbers(p1.head, p2.head)).toStrictEqual(expected.head);
  });
});
