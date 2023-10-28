const _name_ = function (pushed, popped) {
  let stack = [];
  let index2 = 0;
  for (let index = 0; index < pushed.length; index++) {
    stack.push(pushed[index]);
    while (index2 < popped.length && stack.length != 0) {
      if (stack[stack.length - 1] == popped[index2]) {
        stack.pop();
        index2++;
      } else {
        break;
      }
    }
  }
  return !stack.length;
};
let pushed = [1, 2, 3, 4, 5];
let popped = [4, 5, 3, 2, 1];
const result = _name_(pushed, popped);
console.log(result);
