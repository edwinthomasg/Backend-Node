const runLoop = () => {
  let sum = 0;
  for (var i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
};

module.exports = runLoop;
