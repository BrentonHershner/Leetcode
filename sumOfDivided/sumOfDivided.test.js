import { jest } from '@jest/globals';
import sumOfDivided from './sumOfDivided.js';

describe('sumOfDivided', () => {
  it('should exist', () => {
    expect(sumOfDivided).toBeDefined();
  });

  it('should be a function', () => {
    expect(sumOfDivided).toBeInstanceOf(Function);
  });

  it('should return the correct prime numbers', () => {
    expect(sumOfDivided([ 12, 15 ]))
      .toStrictEqual([ [ 2, 12 ], [ 3, 27 ], [ 5, 15 ] ]);
    expect(sumOfDivided([ 15, 21, 24, 30, 45 ]))
      .toStrictEqual([ [ 2, 54 ], [ 3, 135 ], [ 5, 90 ], [ 7, 21 ] ]);
  });

  it('should work with negative numbers', () => {
    expect(sumOfDivided([ 15, 21, 24, 30, -45 ]))
      .toStrictEqual([ [ 2, 54 ], [ 3, 45 ], [ 5, 0 ], [ 7, 21 ] ]);
    expect(sumOfDivided([ 15, 21, 24, 30, 45 ]))
      .toStrictEqual([ [ 2, 54 ], [ 3, 135 ], [ 5, 90 ], [ 7, 21 ] ]);
    expect(sumOfDivided([ 107, 158, 204, 100, 118, 123, 126, 110, 116, 100 ]))
      .toStrictEqual([ [ 2, 1032 ],
      [ 3, 453 ],
      [ 5, 310 ],
      [ 7, 126 ],
      [ 11, 110 ],
      [ 17, 204 ],
      [ 29, 116 ],
      [ 41, 123 ],
      [ 59, 118 ],
      [ 79, 158 ],
      [ 107, 107 ] ]);

  });

});
