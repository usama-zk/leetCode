//The main idea is to convret a string to a character frequency string e.g usama --> a2m1s1u1
// Assumpations
// 1) each character is in lower case a-z

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

console.log(stringToFreq("usama"));
