const rockPaperScissors = (rounds = 3) => {
  let options = ['R', 'P', 'S'];
  if (rounds === 1) { return options; }
  let recursiveResult = rockPaperScissors(rounds - 1);
  return options.reduce(function(accu, singleOption) {
    return accu.concat(recursiveResult.map(function(recursiveElement) {
      return singleOption.concat(recursiveElement);
    }));
  }, []);
};

export default rockPaperScissors;