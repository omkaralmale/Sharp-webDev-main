const _name_ = function (arr) {
  let len = arr.length - 1;
  let index2 = 0;
  for (let index = 0; index < len; index++) {
    if (arr[index] < 0) {
      index2 = index;
      while (index2 < len && arr[index2] < 0) {
        index2++;
      }
      let temp = arr[index2];
      arr[index2] = arr[index];
      arr[index] = temp;
    }
  }
  return arr;
};
let arr = [1, -1, 3, 2, -7, -5, 11, 6];
const result = _name_(arr);
console.log(result);
