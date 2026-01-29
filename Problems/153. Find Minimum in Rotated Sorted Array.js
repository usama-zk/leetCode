var findMin = function(nums) {
    let left=0;
    let right=nums.length-1;
    let min=Infinity;
    while(left<right)
    {
        let mid=Math.floor((right+left)/2);
        if(nums[mid]>nums[right]) 
        {
            left=mid+1;
        }
        else if(nums[mid]<nums[right])
        {
            right=mid;
        }
        else return nums[left];
    }
    return nums[left]
};
console.log(findMin([3,4,5,1,2]));
