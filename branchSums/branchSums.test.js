import { jest } from '@jest/globals';
import branchSums from './branchSums.js';
import { BinaryTree } from './branchSums.js';

describe('branchSums', () => {

  it('should return a sum with 1 node', function () {
    const tree = new BinaryTree(1);
    expect(branchSums(tree)).toEqual([1]);
  });

  it('should return a sum with 2 node', function () {
    const tree = new BinaryTree(1).insert([2]);
    expect(branchSums(tree)).toEqual([3]);
  });
  
  it('should return a sum for a tree with nodes 1-10', function () {
    const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(branchSums(tree)).toEqual([15, 16, 18, 10, 11]);
  });

});
