import { jest } from '@jest/globals';
import lengthOfLongestString from './lengthOfLongestString.js';

describe('lengthOfLongestString', () => {
  it('should exist', () => {
    expect(lengthOfLongestString).toBeDefined();
  });

  it('should be a function', () => {
    expect(lengthOfLongestString).toBeInstanceOf(Function);
  });

  // it('should return a value', () => {
  //   expect(lengthOfLongestString()).toBeDefined();
  // });

  it('should return 3 for abcabcbb', () => {
    expect(lengthOfLongestString('abcabcbb')).toBe(3);
  });

  it('should handle when the first characters are duplicates', () => {
    expect(lengthOfLongestString('aabcabcbb')).toBe(3);
  });

  it('should handle aaaaabcd', () => {
    expect(lengthOfLongestString('aaaaabcd')).toBe(4);
  });

  it('should handle aaaaaabcd', () => {
    expect(lengthOfLongestString('aaaaaabcd')).toBe(4);
  });

  it('should handle aaaaaaabcde', () => {
    expect(lengthOfLongestString('aaaaaaabcde')).toBe(5);
  });

  it('should handle dvdf', () => {
    expect(lengthOfLongestString('dvdf')).toBe(3);
  });

});
