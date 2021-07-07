// from Hack Reactor Toy Problems

var rockPaperScissors = function() {
  const options = ["R", "P", "S"];
  const combos = [];

  const play = (currentResults) => {
    currentResults = currentResults || '';
    if (currentResults.length === 3) {
      combos.push(currentResults);
      return;
    }
    options.forEach(option => {
      play(currentResults + option);
    })
  }
  play();
  return combos;
};

var rockPaperScissors = function(rounds) {
  rounds = rounds || 3;
  const options = ["R", "P", "S"];
  const combos = [];

  const play = (currentResults) => {
    currentResults = currentResults || '';
    if (currentResults.length === rounds) {
      combos.push(currentResults);
      return;
    }
    options.forEach(option => {
      play(currentResults + option);
    })
  }
  play();
  return combos;
};

// console.log(rockPaperScissors(2));

module.exports = rockPaperScissors;

/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/


var rockPaperScissors = function(rounds = 3) {
  if (rounds === 1) { return options = ['R', 'P', 'S']; }
  var recursiveResult = rockPaperScissors(rounds - 1);
  return options.reduce(function(accu, singleOption) {
    return accu.concat(recursiveResult.map(function(recursiveElement) {
      return singleOption.concat(recursiveElement);
    }));
  }, []);
};
