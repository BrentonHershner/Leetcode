import { jest } from '@jest/globals';
import letterCombinations from './letterCombinations.js';

describe('letterCombinations', () => {
  it('should exist', () => {
    expect(letterCombinations).toBeDefined();
  });

  it('should be a function', () => {
    expect(letterCombinations).toBeInstanceOf(Function);
  });

  it('should return a value', () => {
    expect(letterCombinations('')).toBeDefined();
  });

  it('should return an empty array if emtpy string is passed in', () => {
    expect(letterCombinations('')).toEqual([]);
  });

  it('should return a result for 2', () => {
    expect(letterCombinations('2').sort()).toEqual(['a', 'b', 'c']);
  });

  it('should return a result for 3', () => {
    expect(letterCombinations('3').sort()).toEqual(['d', 'e', 'f']);
  });

  it('should return a result for 23', () => {
    const expected = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
    expect(letterCombinations('23').sort()).toEqual(expected.sort());
  });

});
