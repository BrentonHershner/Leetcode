import { jest } from '@jest/globals';
import branchSums from './branchSums.js';
import { BinaryTree } from './branchSums.js';

console.log('starting tests');

xdescribe('branchSums', () => {

  it('Test Case #1', function () {
    const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(branchSums(tree)).toEqual([15, 16, 18, 10, 11]);
  });
  

});
