function maxWater(height) {
  let stack = [];
  let n = height.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    while (stack.length != 0 && height[stack[stack.length - 1]] < height[i]) {
      let pop_height = height[stack.pop()];

      if (stack.length == 0) break;
      let distance = i - stack[stack.length - 1] - 1;
      let min_height =
        Math.min(height[stack[stack.length - 1]], height[i]) - pop_height;

      ans += distance * min_height;
    }
    stack.push(i);
  }

  return ans;
}

// Driver code
let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(maxWater(arr));
