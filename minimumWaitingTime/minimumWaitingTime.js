const minimumWaitingTime = (queries) => {
  if (queries.length === 1) { return 0; }
  return minimumWaitingTime(queries.slice(0, queries.length - 1));
};

export default minimumWaitingTime;