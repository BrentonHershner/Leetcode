// from Hack Reactor Toy Problems
/**
 * Given an array containing a deck of cards, implement a function that shuffles
 * the deck.
 *
 * Example:
 *  var deck = orderedDeck();
 *  // ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]
 *  shuffleDeck(deck);
 *  // ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]
 *
 * Note:
 *   A shuffled deck should be completely random. That means that a given card should
 *   be as likely as any other to appear in a given deck index, completely independent
 *   of the order of the input deck. Think carefully about how to be sure your algorithm
 *   generates a properly shuffled deck-- it is easy to accidentally create a biased algorithm.
 *
 * Extra credit:
 *   - Even a naive algorithm can easily run in linear time. However, does your
 *     algorithm remain unbiased as N (the deck size) increases? How do you know?
 *   - Once you have created a properly random, linear algorithm, what is its space complexity?
 *     There is an algorithm that uses O(N) time and O(1) space (i.e., an in-place shuffle).
 *
 * A further note on randomness:
 *   Technically, a computer-shuffled deck will usually be "pseudorandom",
 *   not "truly" random. However, the difference between the two is too small to
 *   be detectable by any known test.
 *   See http://en.wikipedia.org/wiki/Pseudorandom_number_generator .
 *
 *   A human shuffler is much more biased; it takes around seven normal "riffle"
 *   shuffles before a real deck is actually randomized.
 *   See https://www.dartmouth.edu/~chance/teaching_aids/books_articles/Mann.pdf .
 */


let shuffleDeck = (deck) => {
  let shuffled = [];
  while (deck.length > 0) {
    let randCardIndex = Math.floor(Math.random() * deck.length);
    shuffled.push(deck.splice(randCardIndex, 1)[0]);
  }
  return shuffled;
}

// Ordered deck generator provided for your testing convenience
// (You may alter this function, but an unaltered copy will be used for tests.)
var orderedDeck = function() {
  var suits = ['♥', '♣', '♠', '♦'];
  var values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  var deck = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });

  return deck;
};

// let input = [];
// for (let decks = 0; decks < 10; decks++){
//   input = input.concat(orderedDeck());
// }
// let start = Date.now();
// // console.log(input);
// console.log(shuffleDeck(input));
// console.log(`${input.length} took ${Date.now() - start}ms`);



// let test = () => {
//   let start = Date.now();
//   // We perform this test on an array of 1000 integers.
//   // (Your function must shuffle an arbitrary array to pass this test.)
//   // If your algorithm times out here, it is not running in linear time.
//   var orderedArray = function orderedArray() {
//     var output = [];

//     for (var i = 0; i < 1000; i++) {
//       output.push(i);
//     }

//     return output;
//   };

//   var deck = orderedArray(); // Keep a table of how often each integer appears in each array position...

//   var cardPositionCounts = {};

//   for (var i = 0; i < deck.length; i++) {
//     var cardPosition = cardPositionCounts[deck[i]] = {};

//     for (var j = 0; j < deck.length; j++) {
//       cardPosition[j] = 0;
//     }
//   } // ...over the course of five thousand shuffles


//   var iterations = 1000 * 5;

//   for (var i = 0; i < iterations; i++) {
//     deck = orderedArray();
//     var randomDeck = shuffleDeck(deck);

//     for (var j = 0; j < randomDeck.length; j++) {
//       cardPositionCounts[randomDeck[j]][j] += 1;
//     }
//   } // The result should not betray any obvious statistical bias.


//   deck = orderedArray(); // The expected number of occurrences for a particular card in a particular index is
//   // iterations/1000 = 1

//   var expected = 5;
//   var chi2 = 0;

//   for (var i = 0; i < deck.length; i++) {
//     var cardPosition = cardPositionCounts[deck[i]];

//     for (var j = 0; j < deck.length; j++) {
//       // calculate chi-squared test
//       chi2 += Math.pow(cardPosition[j] - expected, 2) / expected;
//     }
//   } // quick and dirty statistical test:
//   // if your shuffles are uniformly distributed, chi-squared should be roughly 1000^2
//   console.log(`${chi2} is ${chi2 > (1000 * 1000) - (1000 * 10) && chi2 < (1000 * 1000) + (1000 * 10) ? '' : 'not '} within ${1000 * 1000} +/- ${1000 * 10} and took ${Date.now() - start}ms to run`);


// }

// test();
