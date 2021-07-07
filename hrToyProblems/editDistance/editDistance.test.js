const { editDistance } = require('./editDistance.js');

describe('editDistance', () => {

  it('should return zero if no changes', function() {
    expect(editDistance('a', 'a')).toBe(0);
  });

  xit('should find min number of insertions', function() {
    expect(editDistance('', 'abc')).toBe(3);
    expect(editDistance('abc', '')).toBe(3);
    expect(editDistance('abc', 'abcd')).toBe(1);
    expect(editDistance('abc', 'abcde')).toBe(2);
    expect(editDistance('cde', 'abcde')).toBe(2);
  });

  xit('should find min number of subtractions', function() {
    expect(editDistance('abc', 'ab')).toBe(1);
    expect(editDistance('abcde', 'abc')).toBe(2);
    expect(editDistance('abc', 'abcde')).toBe(2);
  });

  xit('should find min number of replacements', function() {
    expect(editDistance('abcd', 'abce')).toBe(1);
    expect(editDistance('abc', 'ebc')).toBe(1);
  });

  xit('should find min number of combination of operations', function() {
    expect(editDistance('abcd', 'gbce')).toBe(2);
  });

});
