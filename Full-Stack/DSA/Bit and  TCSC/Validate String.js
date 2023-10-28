const _name_ = function (string) {
  let string2 = "";
  for (let index = string.length - 1; index >= 0; index--) {
    string2 += string[index];
  }
  return string === string2;
};
let string = "madam";
const result = _name_(string);
console.log(result);
