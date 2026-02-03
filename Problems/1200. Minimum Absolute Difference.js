var minimumAbsDifference = function(arr) {
    arr.sort((a,b)=>a-b);
    let n=arr.length;
    let minDiff=Infinity;
    let result=[];
    for(let i=0;i<n-1;i++)
    {
        let currentDiff=arr[i+1]-arr[i];
        if(currentDiff<minDiff)
        {
            minDiff=currentDiff
            result=[[arr[i],arr[i+1]]];
        }
        else if(currentDiff==minDiff)
        {
            result.push([arr[i],arr[i+1]]);
        }
    }
    return result;
};