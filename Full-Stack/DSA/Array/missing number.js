const _name_ = function (arr) {
  const len = arr.length + 1;
  const nnSum = Math.floor((len * (len + 1)) / 2);
  let arrSum = 0;
  for (let index = 0; index < len - 1; index++) {
    arrSum += arr[index];
  }
  return nnSum - arrSum;
};
let arr = [3, 2, 1];
const result = _name_(arr);
console.log(result);
