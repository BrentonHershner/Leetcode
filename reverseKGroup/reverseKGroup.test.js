import { jest } from '@jest/globals';
import reverseKGroup from './reverseKGroup.js';
import { LinkedList, ListNode } from '../lib/dataStructures.js';

describe('reverseKGroup', () => {
  it('should exist', () => {
    expect(reverseKGroup).toBeDefined();
  });

  it('should be a function', () => {
    expect(reverseKGroup).toBeInstanceOf(Function);
  });

  it('should pass the first test', () => {
    const k = 2;
    const testList = new LinkedList([ 1, 2, 3, 4, 5 ]);
    const expected = new LinkedList([ 2, 1, 4, 3, 5 ]);
    expect(reverseKGroup(testList.head, k)).toEqual(expected.head);
  });

  it('should pass the second test', () => {
    const k = 3;
    const testList = [ 1, 2, 3, 4, 5 ];
    const expected = [ 3, 2, 1, 4, 5 ];
    expect(reverseKGroup(testList.head, k)).toEqual(expected.head);
  });

  it('should pass the third test', () => {
    const k = 1;
    const testList = [ 1, 2, 3, 4, 5 ];
    const expected = [ 1, 2, 3, 4, 5 ];
    expect(reverseKGroup(testList.head, k)).toEqual(expected.head);
  });

  it('should pass the fourth test', () => {
    const k = 1;
    const testList = [ 1 ];
    const expected = [ 1 ];
    expect(reverseKGroup(testList.head, k)).toEqual(expected.head);
  });

});
