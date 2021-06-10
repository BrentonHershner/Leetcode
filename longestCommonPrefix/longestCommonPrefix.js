var longestCommonPrefix = function(strs) {
  let commonPrefix = '';
  const firstStringLetters = strs[0].split('');
  for (let i = 0; i < firstStringLetters.length; i++){
    if (strs.some(word => word[i] !== strs[0][i])) {
      break;
    }
    commonPrefix = commonPrefix.concat(strs[0][i])
  }
  return commonPrefix;
};

export default longestCommonPrefix;
