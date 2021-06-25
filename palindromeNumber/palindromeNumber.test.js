import { jest } from '@jest/globals';
import palindromeNumber from './palindromeNumber.js';

describe('palindromeNumber', () => {
  it('should exist', () => {
    expect(palindromeNumber).toBeDefined();
  });

  it('should be a function', () => {
    expect(palindromeNumber).toBeInstanceOf(Function);
  });

  it('should return a value', () => {
    expect(palindromeNumber()).toBeDefined();
  });

  it('should handle 121', () => {
    expect(palindromeNumber(121)).toBe(true);
  });

  it('should handle -121', () => {
    expect(palindromeNumber(-121)).toBe(false);
  });

  it('should handle 10', () => {
    expect(palindromeNumber(10)).toBe(false);
  });

  it('should handle -101', () => {
    expect(palindromeNumber(-101)).toBe(false);
  });

});
