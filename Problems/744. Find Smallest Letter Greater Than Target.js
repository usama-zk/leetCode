var nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length - 1;
    let targetValue=target.charAt(0);
    let ans=letters[0];

    while(left<=right)
    {
        let mid=Math.floor((left+right)/2);
        if(letters[mid].charAt(0)<=targetValue)
        {
            left=mid+1;
            
        }
        else{
            right=mid-1;
            ans=letters[mid];
        }
    }
    return ans;
};