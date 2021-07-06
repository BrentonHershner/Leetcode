import { jest } from '@jest/globals';
import minimumWaitingTime from './minimumWaitingTime.js';

describe('minimumWaitingTime', () => {
  it('should exist', () => {
    expect(minimumWaitingTime).toBeDefined();
  });

  it('should be a function', () => {
    expect(minimumWaitingTime).toBeInstanceOf(Function);
  });

  it('should return a value', () => {
    expect(minimumWaitingTime([0])).toBeDefined();
  });

  it('should return 0 for a single query', () => {
    expect(minimumWaitingTime([1])).toBeDefined();
  });

  it('should return the correct result for two queries', () => {
    expect(minimumWaitingTime([2, 3])).toBe(2);
  });

  it('should return the correct result for three queries', () => {
    expect(minimumWaitingTime([5,1,4])).toBe(6);
  });

  it('should return the correct result for 5 queries', () => {
    expect(minimumWaitingTime([3,2,1,2,6])).toBe(17);
  });

});
