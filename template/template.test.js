import { jest } from '@jest/globals';
import template from './template.js';

describe('template', () => {
  it('should exist', () => {
    expect(template).toBeDefined();
  });

  it('should be a function', () => {
    expect(template).toBeInstanceOf(Function);
  });

  it('should return a value', () => {
    expect(template()).toBeDefined();
  });

});
