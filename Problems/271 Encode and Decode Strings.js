//271 Encode and Decode Strings
//This one is leetCode premium probelm so currently we have no access but by looking at its name we can assume it would look like this.
const encode = function (str) {
  let encoded = "";
  str.forEach((element) => {
    encoded += element + "#";
  });
  return encoded;
};

const decode = function (str) {
  let decoded = [];
  let st = "";
  Array.from(str).forEach((element) => {
    if (element != "#") {
      st += element;
    } else {
      decoded.push(st);
      st = "";
    }
  });
  return decoded;
};
console.log(encode(["ab", "b", "ac"]));
console.log(decode(encode(["ab", "b", "ac"])));
