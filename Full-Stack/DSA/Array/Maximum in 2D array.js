const _name_ = function (arr) {
  let max = 0;
  let len = arr.length;
  for (let index = 0; index < arr.length; index++) {
    let sum = 0;
    for (let index2 = 0; index2 < arr[index].length; index2++) {
      sum += arr[index][index2];
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};
let account = [
  [1, 2, 3],
  [3, 2, 1],
];
const result = _name_(account);
console.log(result);
