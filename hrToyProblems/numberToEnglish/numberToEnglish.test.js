const Number = require('./numberToEnglish.js');

describe('numberToEnglish', () => {

  it('should write single digits', function() {
    expect((0).toEnglish()).toBe('zero');
    expect((1).toEnglish()).toBe('one');
    expect((2).toEnglish()).toBe('two');
    expect((3).toEnglish()).toBe('three');
    expect((4).toEnglish()).toBe('four');
    expect((5).toEnglish()).toBe('five');
    expect((6).toEnglish()).toBe('six');
    expect((7).toEnglish()).toBe('seven');
    expect((8).toEnglish()).toBe('eight');
    expect((9).toEnglish()).toBe('nine');
  });

  it('should write teens', function() {
    expect((11).toEnglish()).toBe('eleven');
    expect((12).toEnglish()).toBe('twelve');
    expect((13).toEnglish()).toBe('thirteen');
    expect((14).toEnglish()).toBe('fourteen');
    expect((15).toEnglish()).toBe('fifteen');
    expect((16).toEnglish()).toBe('sixteen');
    expect((17).toEnglish()).toBe('seventeen');
    expect((18).toEnglish()).toBe('eighteen');
    expect((19).toEnglish()).toBe('nineteen');
  });

  it('should write tens', function() {
    expect((10).toEnglish()).toBe('ten');
    expect((20).toEnglish()).toBe('twenty');
    expect((30).toEnglish()).toBe('thirty');
    expect((40).toEnglish()).toBe('forty');
    expect((50).toEnglish()).toBe('fifty');
    expect((60).toEnglish()).toBe('sixty');
    expect((70).toEnglish()).toBe('seventy');
    expect((80).toEnglish()).toBe('eighty');
    expect((90).toEnglish()).toBe('ninety');

    // compounds from 21-99 should be hyphenated
    expect((44).toEnglish()).toBe('forty-four');
    expect((67).toEnglish()).toBe('sixty-seven');
    expect((99).toEnglish()).toBe('ninety-nine');
  });

  it('should write hundreds', function() {
    expect((100).toEnglish()).toBe('one hundred');
    expect((500).toEnglish()).toBe('five hundred');
    expect((700).toEnglish()).toBe('seven hundred');

    expect((100).toEnglish()).toBe('one hundred');
    expect((500).toEnglish()).toBe('five hundred');
    expect((700).toEnglish()).toBe('seven hundred');

    expect((275).toEnglish()).toBe('two hundred seventy-five');
    expect((630).toEnglish()).toBe('six hundred thirty');
    expect((922).toEnglish()).toBe('nine hundred twenty-two');
  });

  it('should write thousands', function() {
    expect((1000).toEnglish()).toBe('one thousand');
    expect((50000).toEnglish()).toBe('fifty thousand');
    expect((700000).toEnglish()).toBe('seven hundred thousand');

    expect((5625).toEnglish()).toBe('five thousand six hundred twenty-five');
    expect((17490).toEnglish()).toBe('seventeen thousand four hundred ninety');
    expect((355003).toEnglish()).toBe('three hundred fifty-five thousand three');
    expect((845913).toEnglish()).toBe('eight hundred forty-five thousand nine hundred thirteen');
  });

  it('should write millions', function() {
    expect((1000000).toEnglish()).toBe('one million');
    expect((2385024).toEnglish()).toBe('two million three hundred eighty-five thousand twenty-four');
    expect((973563700).toEnglish()).toBe('nine hundred seventy-three million five hundred sixty-three thousand seven hundred');
  });

  it('should write billions', function() {
    expect((1000000000).toEnglish()).toBe('one billion');
    expect((2385024582).toEnglish()).toBe('two billion three hundred eighty-five million twenty-four thousand five hundred eighty-two');
    expect((973563700353).toEnglish()).toBe('nine hundred seventy-three billion five hundred sixty-three million seven hundred thousand three hundred fifty-three');
  });

  it('should write very large numbers', function() {
    expect((1000000000000).toEnglish()).toBe('one trillion');
    expect((1000000000000000).toEnglish()).toBe('one quadrillion');
    expect((1000000000000000000).toEnglish()).toBe('one quintillion');
  });

  it('should write MAX_INT', function() {
    // 2^53 = 9,007,199,254,740,992 is the maximum value that JavaScript's 64-bit Number can represent as an integer (non decimal)
    expect((Math.pow(2, 53)).toEnglish()).toBe('nine quadrillion seven trillion one hundred ninety-nine billion two hundred fifty-four million seven hundred forty thousand nine hundred ninety-two');
  });

  xdescribe('EXTRA CREDIT:', function() {
    it('should write decimals', function() {
      // use the word "and" to indicate the decimal point
      expect((1.5).toEnglish()).toBe('one and five tenths');
      expect((45.75).toEnglish()).toBe('forty-five and seventy-five hundredths');
      // don't write zero for decimals
      expect((0.3).toEnglish()).toBe('three tenths');
      expect((0.25).toEnglish()).toBe('twenty-five hundredths');
      // one thousandth should be singular
      expect((0.001).toEnglish()).toBe('one thousandth');
      // decimal place names should be hyphenated to distinguish them
      expect((3.0625).toEnglish()).toBe('three and six hundred twenty-five ten-thousandths');
      expect((503.0013427734375).toEnglish()).toBe('five hundred three and thirteen billion four hundred twenty-seven million seven hundred thirty-four thousand three hundred seventy-five ten-trillionths');
    });
  });




});
