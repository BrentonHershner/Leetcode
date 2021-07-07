import { jest } from '@jest/globals';
import generateParenthesis from './generateParenthesis.js';

describe('generateParenthesis', () => {
  it('should exist', () => {
    expect(generateParenthesis).toBeDefined();
  });

  it('should be a function', () => {
    expect(generateParenthesis).toBeInstanceOf(Function);
  });

  it('should return a value', () => {
    expect(generateParenthesis(1)).toBeDefined();
  });

  it('should return a result for 1', () => {
    const expected = ['()'].sort((a, b) => a - b);
    expect(generateParenthesis(1).sort((a, b) => a - b)).toEqual(expected);
  });

  it('should return a result for 2', () => {
    const actual = generateParenthesis(2);
    const expected = ['()()', '(())'];
    expect(actual.sort()).toEqual(expected.sort());
  });

  it('should return a result for 3', () => {
    const actual = generateParenthesis(3);
    const expected = ['((()))', '(()())', '(())()', '()(())', '()()()'];
    expect(actual.sort()).toEqual(expected.sort());
  });

  it('should return a result for 4', () => {
    const actual = generateParenthesis(4);
    const expected = ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"];
    expect(actual.sort()).toEqual(expected.sort());
  });
});
