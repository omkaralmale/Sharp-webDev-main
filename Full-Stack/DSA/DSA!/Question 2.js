const _name_ = function (arr) {
  let maxDiff = -Infinity;
  for (let index = 1; index < arr.length; index++) {
    let diff = Math.abs(arr[index - 1] - arr[index]);
    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }
  return maxDiff;
};
let arr = [1, 2, 4, 7, 11];
const result = _name_(arr);
console.log(result);
