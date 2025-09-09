var twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  let result = 0;
  while (l < r) {
    result = numbers[l] + numbers[r];
    if (result > target) r--;
    else if (result < target) l++;
    else if (result == target) return [l + 1, r + 1];
  }
};
