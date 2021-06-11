var validParentheses = function(s) {
  let valid = true;
  const stack = [];
  const open = ['(', '{', '[']
  const close = [')', '}', ']']
  s.split('').forEach(paren => {
    if (open.includes(paren)) {
      stack.push(paren)
    } else if (open.indexOf(stack.pop()) !== close.indexOf(paren)) {
      valid = false;
      return;
    }
  })
  return valid && stack.length === 0;
};

export default validParentheses;
