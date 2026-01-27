var maxProfit = function(prices) {
    let l=0;
    let r=1;
    maxProfit=0
   while (r<prices.length) {
    if(prices[l]>prices[r]){
        l=r;
    r=r+1;}
    else if(prices[l]<prices[r]){
    let currentProft=prices[r]-prices[l]
    r++;
    maxProfit=Math.max(currentProft,maxProfit)
   }}
   return maxProfit
};

console.log(maxProfit([7,1,5,3,6,4]))
