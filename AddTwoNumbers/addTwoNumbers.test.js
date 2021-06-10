import { jest } from '@jest/globals';
import { ListNode } from './addTwoNumbers';
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
    expect(addTwoNumbers(buildList([0]), buildList([0]))).toStrictEqual(buildList([0]));
  });

  test('single digits', () => {
    expect(addTwoNumbers(buildList([1]), buildList([4]))).toStrictEqual(buildList([5]));
  });

  test('multiple digits, no remainder', () => {
    expect(addTwoNumbers(buildList([1]), buildList([1, 2]))).toStrictEqual(buildList([2, 2]));
    expect(addTwoNumbers(buildList([1]), buildList([3, 2, 1]))).toStrictEqual(buildList([4, 2, 1]));
    expect(addTwoNumbers(buildList([3, 2, 1]), buildList([3, 2, 1]))).toStrictEqual(buildList([6, 4, 2]));
  });

  test('multiple digits, with remainder', () => {
    expect(addTwoNumbers(buildList([8]), buildList([8]))).toStrictEqual(buildList([6, 1]));
    expect(addTwoNumbers(buildList([2, 4, 3]), buildList([5, 6, 4]))).toStrictEqual(buildList([7, 0, 8]));
    expect(addTwoNumbers(buildList([9, 9, 9, 9, 9, 9, 9]), buildList([9, 9, 9, 9]))).toStrictEqual(buildList([8, 9, 9, 9, 0, 0, 0, 1]));
  });

});
