const _name_ = function (arr, k) {
  const rotateArray = function (arr, start, end) {
    while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  };
  let len = arr.length;
  k = k % len;
  rotateArray(arr, 0, len - 1);
  rotateArray(arr, 0, k - 1);
  rotateArray(arr, k, len - 1);
  return arr;
};
let num = [1, 2, 3, 4, 5, 6, 7];
let k = 2;
const result = _name_(num, k);
console.log(result);
