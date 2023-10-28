const _name_ = function (str) {
  let req = 0;
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] == str[end]) {
      end--;
      start++;
    } else {
      req++;
      end--;
    }
  }
  return req;
};
let str = "dam";
const result = _name_(str);
console.log(result);
