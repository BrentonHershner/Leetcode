import { jest } from '@jest/globals';
import textEditor from './textEditor.js';

describe('textEditor', () => {
  it('should exist', () => {
    expect(textEditor).toBeDefined();
  });

  it('should be a function', () => {
    expect(textEditor).toBeInstanceOf(Function);
  });

  it('should return a value', () => {
    expect(textEditor([[]])).toBeDefined();
  });

  it('should perform an append', () => {
    const queries = [
      ["APPEND", "hello"]
    ];
    const expected = ["hello"];
    expect(textEditor(queries)).toEqual(expected);
  });
  
  it('should perform an insert', () => {
    const queries = [
      ["APPEND", "hello"], 
      ["INSERT", " world"]
    ];
    const expected = ["hello"];
    expect(textEditor(queries)).toEqual(expected);
  });
  
  it('should perform a move', () => {
    const queries = [
      ["APPEND", " world!"],
      ["MOVE", "-1"],
      ["APPEND", "hello"]
    ];
    const expected = [" world!", "hello world!"];
    const result = textEditor(queries);
    expect(result).toEqual(expected);
  });
  
  it('should perform a backspace', () => {
    const queries = [
      ["APPEND", "hello world!"],
      ["BACKSPACE"]
    ];
    const expected = ["hello world!", "hello world"];
    expect(textEditor(queries)).toEqual(expected);
  });
  
  it('should delete selected text', () => {
    const queries = [
      ["APPEND", "hello world!"],
      ["SELECT", "5", "10"],
      ["BACKSPACE"]
    ];
    const expected = ["hello world!", "hello!"];
    const result = textEditor(queries);
    expect(result).toEqual(expected);
  });
  
  it('should copy and paste selected text', () => {
    const queries = [
      ["APPEND", "foo bar baz"],
      ["SELECT", "8", "11"],
      ["COPY"],
      ["MOVE", "0"],
      ["PASTE"]
    ];
    const expected = ["foo bar baz", "bazfoo bar baz"];
    const result = textEditor(queries);
    expect(result).toEqual(expected);
  });
  
  it('should copy and paste over selected text', () => {
    const queries = [
      ["APPEND", "foo bar baz"],
      ["SELECT", "8", "10"],
      ["COPY"],
      ["SELECT", "0", "2"],
      ["PASTE"]
    ];
    const expected = ["foo bar baz", "baz bar baz"];
    const result = textEditor(queries);
    expect(result).toEqual(expected);
  });
  
  it('should cut and paste selected text', () => {
    const queries = [
      ["APPEND", "foo bar baz"],
      ["SELECT", "4", "7"],
      ["CUT"],
      ["MOVE", "-11"],
      ["PASTE"]
    ];
    const expected = ["foo bar baz", "foo baz", "bar foo baz"];
    const result = textEditor(queries);
    expect(result).toEqual(expected);
  });
  
  it('should be able to undo a modification', () => {
    const queries = [
      ["APPEND", "hello world!"],
      ["SELECT", "6", "10"],
      ["BACKSPACE"],
      ["UNDO"],
      ["APPEND", "you"]
    ];
    const expected = ["hello world!", "hello !", "hello world!", "hello you!"];
    const result = textEditor(queries);
    expect(result).toEqual(expected);
  });
  
  it('should be able to redo a modification', () => {
    const queries = [
      ["APPEND", "hello world!"],
      ["SELECT", "6", "10"],
      ["BACKSPACE"],
      ["UNDO"],
      ["REDO"]
    ];
    const expected = ["hello world!", "hello !", "hello world!", "hello !"];
    const result = textEditor(queries);
    expect(result).toEqual(expected);
  });

});
