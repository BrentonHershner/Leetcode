import { jest } from '@jest/globals';
import findClosestValueInBst, { BST } from './findClosestValueInBst';

describe('findClosestValueInBst', () => {

  it('Test Case #1', function() {
    const root = new BST(10);
    root.left = new BST(5);
    root.left.left = new BST(2);
    root.left.left.left = new BST(1);
    root.left.right = new BST(5);
    root.right = new BST(15);
    root.right.left = new BST(13);
    root.right.left.right = new BST(14);
    root.right.right = new BST(22);
    const expected = 13;
    const actual = findClosestValueInBst(root, 12);
    expect(actual).toEqual(expected);

  });

  // test('return longest prefix of three elements in an array', () => {
  //   expect(findClosestValueInBst(['flower', 'flow', 'flight'])).toEqual('fl');
  // });

  // test('return an empty string if there are no common prefix', () => {
  //   expect(findClosestValueInBst(['dog', 'racecar', 'car'])).toEqual('');
  // });

  // test('return just the common prefix even when suffixes match', () => {
  //   expect(findClosestValueInBst(['cir', 'car'])).toEqual('c');
  // });

});
