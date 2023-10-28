const _name_ = function (arr) {
  let sum = 0;
  let len = arr.length;
  for (let index = 0; index < len; index++) {
    for (let index2 = index; index2 < len; index2 += 2) {
      for (let index3 = index; index3 <= index2; index3++) {
        sum += arr[index3];
      }
    }
  }
  return sum;
};
let arr = [1, 4, 2, 5, 3];
const result = _name_(arr);
console.log(result);
