import { jest } from '@jest/globals';
import validParentheses from './validParentheses';

describe('longestCommonPrefix', () => {

  test('[', () => {
    expect(validParentheses("[")).toBe(false);
  });

  test('()', () => {
    expect(validParentheses("()")).toBe(true);
  });

  test('()[]{}', () => {
    expect(validParentheses("()[]{}")).toBe(true);
  });

  test('(]', () => {
    expect(validParentheses("(]")).toBe(false);
  });

  test('([)]', () => {
    expect(validParentheses("([)]")).toBe(false);
  });

  test('{[]}', () => {
    expect(validParentheses("{[]}")).toBe(true);
  });
  
});