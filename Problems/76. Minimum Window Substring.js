var minWindow = function(s, t) {
  let l=0;
  let r=0; 
  let ans = [-1, 0, 0];
  let map=new Map();
  let count=new Map();
  let formed=0;
  for(let char of t){
      map.set(char,(map.get(char) ||0)+1)
    }
    let required=map.size;
    while(r<s.length)
  {
    let char=s[r];
    count.set(char,(count.get(char)||0)+1)
    if(map.has(char)&&map.get(char)===count.get(char)){
        formed++;
    }
    
    while(l<=r && formed===required)
      {
        if(ans[0]===-1 || r-l+1<ans[0]){
          ans=[r-l+1,l,r];
        }
        let leftChar=s[l];
        count.set(leftChar,count.get(leftChar)-1);
        if (map.has(leftChar) && count.get(leftChar) < map.get(leftChar)) {
          formed--;
        }
        l++;
      }
      r++

  }
    return ans[0]===-1?"":s.slice(ans[1],ans[2]+1);
};

console.log(minWindow("ADOBECODEBANC","ABC"));
