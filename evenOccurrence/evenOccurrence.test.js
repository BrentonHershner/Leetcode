import { jest } from '@jest/globals';
import evenOccurrence from './evenOccurrence.js';

describe('evenOccurrence', () => {
  it('should exist', () => {
    expect(evenOccurrence).toBeDefined();
  });

  it('should be a function', () => {
    expect(evenOccurrence).toBeInstanceOf(Function);
  });

  it('should return a value', () => {
    expect(evenOccurrence([1, 2, 2])).toBeDefined();
  });

  it('should preturn the first even occurrence of an array of numbers', () => {
    expect(evenOccurrence([1, 3, 3, 3, 2, 4, 4, 2, 5])).toBe(2);
  });

  it('should return the first even occurrence of an array with strings', () => {
    expect(evenOccurrence(['cat', 'dog', 'dig', 'cat'])).toBe('cat');
  });

  it('should return the first even occurrence of a mixed array', () => {
    expect(evenOccurrence(['meow', 1, 1, 'meow', 'meow', 'meow'])).toBe('meow');
  });

  it('should return the first even occurrence in an array with multiple even occurrences', () => {
    var array = ['doublerainbow', 'grumpycat', 'grumpycat', 'doublerainbow'];
    expect(evenOccurrence(array)).toBe('doublerainbow');
  });

  it('should return `null` when no items occur an even number of times', () => {
    var array = ['rob', 'victor', 'fred', 'jess', 'rob', 'rob'];
    expect(evenOccurrence(array)).toBe(null);
  });

});
