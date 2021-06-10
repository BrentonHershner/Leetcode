import { jest } from '@jest/globals';
import longestCommonPrefix from './longestCommonPrefix';


describe('longestCommonPrefix', () => {

  test('return longest prefix of two elements in an array', () => {
    expect(longestCommonPrefix(['flower', 'flow'])).toEqual('flow');
  });
  
  test('return longest prefix of three elements in an array', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl');
  });
  
  test('return an empty string if there are no common prefix', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('');
  });

  test('return just the common prefix even when suffixes match', () => {
    expect(longestCommonPrefix(['cir', 'car'])).toEqual('c');
  });

});
