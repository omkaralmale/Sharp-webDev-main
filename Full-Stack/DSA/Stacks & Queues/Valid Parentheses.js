const _name_ = function (string) {
  let stack = [];
  if (string.length <= 1) {
    return false;
  }
  for (char of string) {
    if (char == "{" || char == "[" || char == "(") {
      stack.push(char);
    } else {
      if (stack.length == 0) {
        return false;
      } else {
        let popped = stack.pop();
        if (
          (popped == "(" && char == ")") ||
          (popped == "[" && char == "]") ||
          (popped == "{" && char == "}")
        ) {
          continue;
        } else {
          return false;
        }
      }
    }
  }
  return !stack.length;
};
// "(]"
// "()"
let string = "()[}{}";
const result = _name_(string);
console.log(result);
