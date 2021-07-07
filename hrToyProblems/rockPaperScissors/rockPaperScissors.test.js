const rockPaperScissors = require("./rockPaperScissors");

describe('rockPaperScissors', function() {
  it('should contain every throw', function() {
    var expected = [
      'RRR', 'RRP', 'RRS',
      'RPR', 'RPP', 'RPS',
      'RSR', 'RSP', 'RSS',
      'PRR', 'PRP', 'PRS',
      'PPR', 'PPP', 'PPS',
      'PSR', 'PSP', 'PSS',
      'SRR', 'SRP', 'SRS',
      'SPR', 'SPP', 'SPS',
      'SSR', 'SSP', 'SSS'
    ];
    var result = rockPaperScissors();
    // expect(result).toEqual(arrayContaining(expected));
    // expect(expected).toEqual(arrayContaining(result));
  });
});