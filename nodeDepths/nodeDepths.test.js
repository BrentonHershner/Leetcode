import { jest } from '@jest/globals';
import nodeDepths from './nodeDepths.js';
import { BinaryTree } from './nodeDepths.js';

describe('nodeDepths', () => {

  it('should return a sum with 1 node', function () {
    const tree = new BinaryTree(1);
    expect(nodeDepths(tree)).toEqual(0);
  });

  it('should return a sum with 2 nodes', function () {
    const tree = new BinaryTree(1).insert([2]);
    expect(nodeDepths(tree)).toEqual(1);
  });
  
  it('should return a sum with 3 nodes', function () {
    const tree = new BinaryTree(1).insert([2, 3]);
    expect(nodeDepths(tree)).toEqual(2);
  });
  
  it('should return a sum with 4 nodes', function () {
    const tree = new BinaryTree(1).insert([2, 3, 4]);
    expect(nodeDepths(tree)).toEqual(4);
  });

});
