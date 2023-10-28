const _name_ = function (nums) {
  let len = nums.length;
  nums = nums.concat(...nums);
  let ans = new Array(len).fill(-1);
  console.log(ans);
  console.log(nums);
  for (let index = 0; index < ans.length; index++) {
    for (let index1 = index + 1; index1 < nums.length; index1++) {
      if (nums[index] < nums[index1]) {
        ans[index] = nums[index1];
        break;
      } else {
        continue;
      }
    }
  }
  return ans;
};
let nums = [1, 2, 3, 4, 3];
const result = _name_(nums);
console.log(result);
