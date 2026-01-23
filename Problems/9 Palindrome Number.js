var isPalindrome = function (x) {
  let str = x.toString();
  if (str.length <= 1) return true;
  let r = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[r]) {
      if (i > r) return true;
      else {
        r--;
        continue;
      }
    } else {
      return false;
    }
  }
};
