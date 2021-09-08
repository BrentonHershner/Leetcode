const findMedianSortedArrays = (nums1, nums2) => {
  const c = nums1.concat(nums2)
    .sort((a, b) => a - b);
  const l = c.length;
  return  l % 2 ? c[(l - 1) / 2] : (c[l / 2] + c[(l / 2) - 1]) / 2;
};

export default findMedianSortedArrays;