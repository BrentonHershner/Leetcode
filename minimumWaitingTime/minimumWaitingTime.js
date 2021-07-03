const minimumWaitingTime = (queries) => {
  queries.sort((a, b) => a - b);
  let totalWaitingTime = 0;
  for (let i = 0; i < queries.length; i++){
    totalWaitingTime += (queries.length - (i + 1)) * queries[i];
  }
  return totalWaitingTime;
};

export default minimumWaitingTime;
