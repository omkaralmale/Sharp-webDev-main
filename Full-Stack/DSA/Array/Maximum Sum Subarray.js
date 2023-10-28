const _name_ = function (arr) {
  let max = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
};
const arr = [5, 2, -4, -5, 3, -1, 2, 3, 1];
const result = _name_(arr);
console.log(result);
