var search = function(nums, target) {
  let n= nums.length;
  let left=0;
  let right=n-1;
  while(left<=right)
  {
    let mid=Math.floor((right+left)/2)
    if(nums[mid]==target) return mid;
    if(nums[left]<=nums[mid])
    {
        //left side is sorted
        if(nums[left]<=target && target<nums[mid])
        {
            right=mid-1;
        }
        else
        {
            left=mid+1;
        }
    }
    else    
    {
         //right side is sorted
        if(nums[mid]<target && target<=nums[right])
        {
            left=mid+1;
        }
        else
        {
            right=mid-1;
        }
    }
  }
  return -1
}