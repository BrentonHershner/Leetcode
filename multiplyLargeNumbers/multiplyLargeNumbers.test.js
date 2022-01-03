import { jest } from '@jest/globals';
import multiply from './multiplyLargeNumbers.js';

describe('multiply', () => {
  it('should exist', () => {
    expect(multiply).toBeDefined();
  });

  it('should be a function', () => {
    expect(multiply).toBeInstanceOf(Function);
  });

  it('should multiply some simple multiplicaitons', () => {
    expect(multiply("2", "3")).toBe("6");
    expect(multiply("30", "69")).toBe("2070");
    expect(multiply("11", "85")).toBe("935");
  });
  
  it('should handle some corner test multiplications', () => {
    expect(multiply("-0.00", "0.0000")).toBe("0");
    expect(multiply("-0.01", "0.0000")).toBe("0");
    expect(multiply("2.01", "3.0000")).toBe("6.03");
    expect(multiply("2", "-3.000001")).toBe("-6.000002");
    expect(multiply("-5.0908", "-123.1")).toBe("626.67748");
  });

});
