var characterReplacement = function(s, k) {
    let l=0;
    let maxLength=0;
    let maxFreq=0;
    let count={};
    for (let r = 0; r < s.length; r++) {
        char=s[r];
        count[char]=(count[char]||0)+1;
        maxFreq=Math.max(maxFreq,count[char]);
        if(r-l+1-maxFreq>k)
        {
            count[s[l]]--;
            l++;
        }
        maxLength=Math.max(maxLength,r-l+1)
    }
    return maxLength;
};

console.log(characterReplacement("AABABBA",1));

