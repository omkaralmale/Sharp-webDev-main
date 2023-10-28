const _name_ = function (arr, target) {
  let start = 0;
  let end = num.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};
num = [-1, 0, 3, 5, 9, 12];
let target = 11;
const result = _name_(num, target);
console.log(result);
