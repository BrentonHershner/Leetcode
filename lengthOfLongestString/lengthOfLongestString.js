const lengthOfLongestString = (s) => {
  if (s == null) { return null; }
  let start = 0; 
  let chars = {};
  return s.split('').reduce((longest, char, end) => {
    if (chars[char]){ start = Math.max(chars[char], start) }
    chars[char] = end + 1;
    return Math.max(longest, end - start + 1);
  }, 0);
};






export default lengthOfLongestString;