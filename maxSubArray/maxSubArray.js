const sumOfArray = (array) => {
  return array.reduce((accum, curr) => accum + curr)
}

const memoized = {};

var maxSubArray = (nums) => {

  if (nums.length === 1) { return nums[0]; }

  let memoizedResult = memoized[JSON.stringify(nums)];
  if (memoizedResult) { return memoizedResult; }

  const result = Math.max(
    sumOfArray(nums),
    maxSubArray(nums.slice(1)),
    maxSubArray(nums.slice(0, nums.length - 1))
  );

  memoizedResult = result;

  return result;
};

export default maxSubArray;
