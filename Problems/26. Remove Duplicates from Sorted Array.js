var removeDuplicates = function(nums) {
  left=0;
  right=1;
  while (right<nums.length) {
    if(nums[left]==nums[right]){
        right++;
        continue;
    }
    else{
        left++;
        nums[left]=nums[right];
        right++;
    }
  }
  return left+1;
};

console.log(removeDuplicates([1,1,2]));
