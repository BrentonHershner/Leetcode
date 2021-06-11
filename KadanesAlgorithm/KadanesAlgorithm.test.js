import { jest } from '@jest/globals';
import KadanesAlgorithm from './KadanesAlgorithm';

describe('KadanesAlgorithm', () => {

  // test('[', () => {
  //   expect(KadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]).toStrictEqual();
  // });

  test('[-2,1,-3,4,-1,2,1,-5,4]', () => {
    expect(KadanesAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toStrictEqual([4, -1, 2, 1]);
  });

  test('should return the whole array if that is the greatest subarray', () => {
    expect(KadanesAlgorithm([3, 2, 1, 2, 3])).toStrictEqual([3, 2, 1, 2, 3]);
  });

  test('should return the whole array if the array is a single element', () => {
    expect(KadanesAlgorithm([3])).toStrictEqual([3]);
  });

});
