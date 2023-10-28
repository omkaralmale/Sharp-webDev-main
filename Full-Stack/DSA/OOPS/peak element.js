const _name_ = function (arr) {
  let start = 0;
  let end = num.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};
num = [1, 2, 1, 3, 5, 6, 4];
const result = _name_(num);
console.log(result);
