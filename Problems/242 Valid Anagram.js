var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  } else {
    let count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
      count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    }
    for (let i = 0; i < count.length; i++) {
      if (count[i] != 0) return false;
    }
    return true;
  }
};
