import { jest } from '@jest/globals';
import translateRomanNumeral from './RomanToInteger.js';

describe('translateRomanNumerals', () => {
  test('single letters', () => {
    expect(translateRomanNumeral('I')).toBe(1);
    expect(translateRomanNumeral('V')).toBe(5);
    expect(translateRomanNumeral('X')).toBe(10);
    expect(translateRomanNumeral('L')).toBe(50);
    expect(translateRomanNumeral('C')).toBe(100);
    expect(translateRomanNumeral('D')).toBe(500);
    expect(translateRomanNumeral('M')).toBe(1000);
  });
  test('single digits', () => {
    expect(translateRomanNumeral('II')).toBe(2);
    expect(translateRomanNumeral('III')).toBe(3);
    expect(translateRomanNumeral('IV')).toBe(4);
    expect(translateRomanNumeral('VI')).toBe(6);
    expect(translateRomanNumeral('VII')).toBe(7);
    expect(translateRomanNumeral('VIII')).toBe(8);
    expect(translateRomanNumeral('IX')).toBe(9);
  });
  test('two digits', () => {
    expect(translateRomanNumeral('XI')).toBe(11);
    expect(translateRomanNumeral('XII')).toBe(12);
    expect(translateRomanNumeral('XIII')).toBe(13);
    expect(translateRomanNumeral('XIV')).toBe(14);
    expect(translateRomanNumeral('XV')).toBe(15);
  })
  
  it('should add multiple letters correctly', () => {
    expect(translateRomanNumeral('II')).toBe(2);
    expect(translateRomanNumeral('VI')).toBe(6);
    expect(translateRomanNumeral('VII')).toBe(7);
    expect(translateRomanNumeral('XV')).toBe(15);
    expect(translateRomanNumeral('XX')).toBe(20);
    expect(translateRomanNumeral('XXII')).toBe(22);
    expect(translateRomanNumeral('XXX')).toBe(30);
    expect(translateRomanNumeral('XXXIII')).toBe(33);
  });
  
  it('should subtract multiple letters correctly', () => {
    expect(translateRomanNumeral('IV')).toBe(4);
    expect(translateRomanNumeral('XIX')).toBe(19);
    expect(translateRomanNumeral('XLIV')).toBe(44);
    expect(translateRomanNumeral('MMCM')).toBe(2900);
  });

  it('should translate years via roman numerals Wikipedia page', () => {
    expect(translateRomanNumeral('MCMLIV')).toBe(1954);
    expect(translateRomanNumeral('MCMXC')).toBe(1990);
    expect(translateRomanNumeral('MMVIII')).toBe(2008);
    expect(translateRomanNumeral('MDCCCCX')).toBe(1910);
    expect(translateRomanNumeral('MCMX')).toBe(1910);
    expect(translateRomanNumeral('MMXXI')).toBe(2021);
  });
});
