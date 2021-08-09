import { jest } from '@jest/globals';
import tandemBicycle from './tandemBicycle.js';

describe('tandemBicycle', () => {
  it('should exist', () => {
    expect(tandemBicycle).toBeDefined();
  });

  it('should be a function', () => {
    expect(tandemBicycle).toBeInstanceOf(Function);
  });

  it('should return a value', () => {
    expect(tandemBicycle()).toBeDefined();
  });

  it('should return the correct fastest speed', () => {
    const redShirtSpeeds = [5, 5, 3, 9, 2];
    const blueShirtSpeeds = [3, 6, 7, 2, 1];
    const fastest = true;
    expect(tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest)).toBe(32);
  });

  it('should return the correct slowest speed', () => {
    const redShirtSpeeds = [5, 5, 3, 9, 2]; // 2, 3, 5, 5, 9
    const blueShirtSpeeds = [3, 6, 7, 2, 1]; // 1, 2, 3, 6, 7
    // 7, 6, 5, 5, 9
    const fastest = false;
    expect(tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest)).toBe(25);
  });

});
