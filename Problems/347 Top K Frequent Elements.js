var topKFrequent = function (nums, k) {
  if (nums.length <= k) {
    return nums;
  }
  let freqMap = new Map();
  let freqArray = [];
  let result = [];
  let count = 0;
  for (const s of nums) {
    if (!freqMap.get(s)) {
      freqMap.set(s, 0);
    }
    freqMap.set(s, freqMap.get(s) + 1);
  }
  freqMap.forEach((value, key) => {
    if (!freqArray[value]) {
      freqArray[value] = [];
    }
    freqArray[value].push(key);
  });
  for (let i = freqArray.length - 1; i > -1 && count < k; i--) {
    if (freqArray[i] != undefined) {
      for (const s of freqArray[i]) {
        result.push(s);
        count++;
        if (count == k) break;
      }
    }
  }
  return result;
};

console.log(topKFrequent([1, 2, 2, 2, 1, 1, 5, 8, 9, 3], 3));
