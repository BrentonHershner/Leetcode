// from Hack Reactor Toy Problems
/* 
* 
* Integer Reverse
* 
* Given a positive integer, return its digits reversed. 
* 
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY. 
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number) {
  let reversed = 0;
  while (number > 0) {
    reversed = reversed * 10 + number % 10;
    number = (number - number % 10) / 10;
  }
  return reversed;
}
