function decodeString(s) {
  const stack = [];

  for (let char of s) {
    if (char !== "]") {
      stack.push(char);
    } else {
      let substring = "";
      while (stack[stack.length - 1] !== "[") {
        substring = stack.pop() + substring;
      }
      stack.pop(); // Remove '['

      let num = "";
      while (!isNaN(stack[stack.length - 1])) {
        num = stack.pop() + num;
      }
      num = parseInt(num);

      stack.push(substring.repeat(num));
    }
  }

  return stack.join("");
}

const string = "3[a]2[bc]";
const result = decodeString(string);
console.log(result); // Output: "aaabcbc"
