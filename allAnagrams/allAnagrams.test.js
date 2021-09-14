import { jest } from '@jest/globals';
import allAnagrams from './allAnagrams.js';

describe('allAnagrams', function() {
  it('should exist', function() {
    expect(allAnagrams).toBeDefined();
  });

  it('should be a function', function() {
    expect(allAnagrams).toBeInstanceOf(Function);
  });

  it('should return an array', function() {
    var result = allAnagrams('hello');
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Array);
  });

  it('should return an array with a single character', function() {
    var result = allAnagrams('a');
    expect(result).toEqual(['a']);
  });

  it('should return an array of anagrams that contains `lives` for input `elvis`', function() {
    var result = allAnagrams('elvis');
    var found = result.indexOf('lives') !== -1;
    expect(found).toBe(true);
  });

  it('should return an array of anagrams that contains `badcredit` for input `debitcard`', function() {
    var result = allAnagrams('debitcard');
    var found = result.indexOf('badcredit') !== -1;
    expect(found).toBe(true);
  });

  it('should return all anagrams for \'ab\'', function() {
    var expected = ['ab', 'ba'];
    var result = allAnagrams('ab');
    var found = false;
    var item;
    for (var i = 0; i < expected.length; i++) {
      item = expected[i];
      found = result.indexOf(item) !== -1;
      expect(found).toBe(true);
    }
  });

  it('should return all anagrams for \'abc\'', function() {
    var expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
    var result = allAnagrams('abc');
    expect(result.sort()).toEqual(expected);
    var found = false;
    var item;
    for (var i = 0; i < expected.length; i++) {
      item = expected[i];
      found = result.indexOf(item) !== -1;
      expect(found).toBe(true);
    }
  });

  it('should return all anagrams for \'apps\'', function() {
    var expected = [ 'apps', 'apsp', 'aspp', 'paps', 'pasp', 'ppas',
      'ppsa', 'psap', 'pspa', 'sapp', 'spap', 'sppa' ];
    var result = allAnagrams('apps');
    var found = false;
    var item;
    var index;
    for (var i = 0; i < expected.length; i++) {
      item = expected[i];
      found = result.indexOf(item) !== -1;
      // we should have found the current expected anagram item in your
      // `result` array but we did not!
      expect(found).toBe(true);
    }
  });

  it('should return all __unique__ anagrams for \'apps\'', function() {
    // if you've gotten this far, you're doing awesome. this last test
    // is to check if you're returning an anagram array without duplicates
    var expected = [ 'apps', 'apsp', 'aspp', 'paps', 'pasp', 'ppas', 'ppsa',
      'psap', 'pspa', 'sapp', 'spap', 'sppa' ];
    var match = true;
    var result = allAnagrams('apps');
    expect(result.length).toBe(expected.length);
  });

  it('should not use underscore\'s `uniq`', function() {
    // this just checks your code for any usage of `_.uniq`
    // NOTE: this test _might_ still fail even if you technically don't use
    // `_.uniq` (ie., if you hae commented out code that still references
    // `_.uniq` in your solution.)
    var usesUniq = allAnagrams.toString().match(/\s*_\.uniq/) === null;
    expect(usesUniq).toBe(true);
  });
});
