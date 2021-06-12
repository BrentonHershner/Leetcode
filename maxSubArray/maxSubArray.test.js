import { jest } from '@jest/globals';
import maxSubArray from './maxSubArray.js';

describe('maxSubArray', () => {

  test('[-2,1,-3,4,-1,2,1,-5,4]', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  test('should return the sum of the whole array if that is the greatest subarray', () => {
    expect(maxSubArray([3, 2, 1, 2, 3])).toStrictEqual(11);
  });

  test('should return the sum of a single element if input is only a single element', () => {
    expect(maxSubArray([3])).toStrictEqual(3);
  });

});
