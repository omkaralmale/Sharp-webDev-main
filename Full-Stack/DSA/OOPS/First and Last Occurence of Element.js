const _name_ = function (arr, target) {
  // let start = 0;
  // let end = num.length - 1;
  // while (start < end) {
  //   let mid = Math.floor((start + end) / 2);
  //   if (arr[mid] == target) {
  //     return mid;
  //   } else if (arr[mid] > target) {
  //     end = mid - 1;
  //   } else {
  //     start = mid + 1;
  //   }
  // }
  // return -1;
  //   5 7 7 8 8 8 8 9 10
  const findStart = function (arr, start, end, target) {
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] >= target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return start;
  };
  const findEnd = function (arr, start, end, target) {
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] <= target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return end;
  };
  let start = 0;
  let end = num.length;
  const st = findStart(arr, start, end, target);
  const ed = findEnd(arr, start, end, target);
  return [st, ed];
};
num = [5, 7, 7, 8, 8, 8, 8, 8, 8, 10];
let target = 8;
const result = _name_(num, target);
console.log(result);
