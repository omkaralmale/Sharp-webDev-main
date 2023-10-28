const _name_ = function (string) {
  let stack = [];
  for (char of string) {
    if (stack[stack.length - 1] != char) {
      stack.push(char);
    } else {
      stack.pop();
    }
  }
  return stack;
};
let string = "azxxzy";
const result = _name_(string);
console.log(result);
