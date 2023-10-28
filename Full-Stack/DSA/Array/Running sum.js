const _name_ = function (arr) {
  let ans = [];
  ans[0] = arr[0];
  for (let index = 1; index < arr.length; index++) {
    ans[index] = ans[index - 1] + arr[index];
  }
  return ans;
};
let arr = [1, 2, 3, 4];
let num = [1, 1, 1, 1, 1];
const result = _name_(arr);
const result2 = _name_(num);
console.log(result);
console.log(result2);
