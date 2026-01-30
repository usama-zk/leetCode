var dailyTemperatures = function(temperatures) {
  let stack=[];
  n=temperatures.length
  ans=new Array(n).fill(0);
  for(let i=0;i<n;i++)
  {
    while(stack.length>0 && temperatures[stack[stack.length-1]]<temperatures[i])
    {
    index=stack.pop()
    ans[index]=i-index

    }
    stack.push(i)
}
    return ans;
};
console.log(dailyTemperatures([73,74,75,71,69,72,76,73])) //[1,1,4,2,1,1,0,0]