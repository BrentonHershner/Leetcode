import { jest } from '@jest/globals';
import findMedianSortedArrays from './findMedianSortedArrays.js';

describe('findMedianSortedArrays', () => {
  it('should exist', () => {
    expect(findMedianSortedArrays).toBeDefined();
  });

  it('should be a function', () => {
    expect(findMedianSortedArrays).toBeInstanceOf(Function);
  });

  it('should return a value', () => {
    expect(findMedianSortedArrays([], [])).toBeDefined();
  });

  it('should return median for arrays of length 2 and 1', () => {
    expect(findMedianSortedArrays([ 1, 3 ], [ 2 ])).toBe(2);
  });

  it('should return median for arrays of length 2 and 2', () => {
    expect(findMedianSortedArrays([ 1, 2 ], [ 3, 4 ])).toBe(2.5);
  });

  it('should return median for arrays of zeros', () => {
    expect(findMedianSortedArrays([ 0, 0 ], [ 0, 0 ])).toBe(0);
  });

  it('should return median for arrays of length 0 and 1', () => {
    expect(findMedianSortedArrays([], [ 1 ])).toBe(1);
  });

  it('should return median for arrays of length 1 and 0', () => {
    expect(findMedianSortedArrays([ 2 ], [])).toBe(2);
  });

});
