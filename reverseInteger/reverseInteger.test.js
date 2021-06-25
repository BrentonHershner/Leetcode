import { jest } from '@jest/globals';
import reverseInteger from './reverseInteger.js';

describe('reverseInteger', () => {
  it('should exist', () => {
    expect(reverseInteger).toBeDefined();
  });

  it('should be a function', () => {
    expect(reverseInteger).toBeInstanceOf(Function);
  });

  it('should return a value', () => {
    expect(!reverseInteger()).toBeDefined();
  });

  it('should return null', () => {
    expect(reverseInteger()).toBe(null);
  });

  it('should handle 123', () => {
    expect(reverseInteger(123)).toBe(321);
  });

  it('should handle -123', () => {
    expect(reverseInteger(-123)).toBe(-321);
  });

  it('should handle 120', () => {
    expect(reverseInteger(120)).toBe(21);
  });

  it('should handle 0', () => {
    expect(reverseInteger(0)).toBe(0);
  });

});
