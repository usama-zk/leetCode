function stringToFreq(str) {
  let freq = new Array(26).fill(0);
  let freqString = "";
  for (let i = 0; i < str.length; i++) {
    freq[str.charCodeAt(i) - "a".charCodeAt(0)]++;
  }
  for (let i = 0; i < freq.length; i++) {
    if (freq[i] === 0) continue;
    freqString += String.fromCharCode(i + "a".charCodeAt(0)) + freq[i];
  }
  return freqString;
}

var groupAnagrams = function (strs) {
  let groups = new Map();
  let result = [];
  for (const s of strs) {
    const freqString = stringToFreq(s);
    if (!groups.get(freqString)) {
      groups.set(freqString, []);
    }
    groups.get(freqString).push(s);
  }
  groups.forEach((value) => result.push(value));
  return result;
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
