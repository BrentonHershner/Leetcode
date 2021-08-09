const tandemBicycle = (redShirtSpeeds, blueShirtSpeeds, fastest) => {
  if (redShirtSpeeds == null || blueShirtSpeeds == null || fastest == null) { return 0; }
  const sortedRed = redShirtSpeeds.sort((a, b) => a - b);
  const sortedBlue = blueShirtSpeeds.sort((a, b) => {
    return fastest ? b - a : a - b;
  });

  return sortedRed.reduce((total, redShirt, index) => {
    return total + Math.max(redShirt, sortedBlue[index]);
  }, 0);
};

export default tandemBicycle;