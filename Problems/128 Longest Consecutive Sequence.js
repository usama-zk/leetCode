var longestConsecutive = function (nums) {
  if (!nums.length) return 0;
  let set = new Set(nums);
  let result = 1;
  let val = 1;
  set.forEach((Element) => {
    if (!set.has(Element - 1)) {
      currNum = Element;
      val = 1;
      while (set.has(currNum + 1)) {
        val++;
        currNum++;
      }
    }
    result = Math.max(result, val);
  });
  return result;
};
