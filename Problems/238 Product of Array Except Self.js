var productExceptSelf = function (nums) {
  let result = [];
  let left = [];
  let right = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] != undefined) {
      left[i] = nums[i] * left[i - 1];
    } else {
      left[i] = 1;
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i + 1] != undefined) {
      right[i] = nums[i] * right[i + 1];
    } else {
      right[i] = 1;
    }
  }

  return left;
};

console.log(productExceptSelf([2, 4, 3, 2]));
