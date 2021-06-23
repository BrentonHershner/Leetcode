import { jest } from '@jest/globals';
import branchSums, { BinaryTree } from './branchSums';

describe('branchSums', () => {

  it('Test Case #1', function () {
    const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(branchSums(tree)).toEqual([15, 16, 18, 10, 11]);
  });
  
  class BinaryTree extends BinaryTree {
    constructor(value) {
      super(value);
    }
  
    insert(values, i = 0) {
      if (i >= values.length) return;
      const queue = [this];
      while (queue.length > 0) {
        let current = queue.shift();
        if (current.left === null) {
          current.left = new BinaryTree(values[i]);
          break;
        }
        queue.push(current.left);
        if (current.right === null) {
          current.right = new BinaryTree(values[i]);
          break;
        }
        queue.push(current.right);
      }
      this.insert(values, i + 1);
      return this;
    }
  }
  

});
