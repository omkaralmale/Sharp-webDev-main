// bubble sort
const _name_ = function (arr) {
  let flag = false;
  for (let index = 0; index < arr.length; index++) {
    flag = false;
    for (let index2 = 0; index2 < arr.length; index2++) {
      if (arr[index] < arr[index2]) {
        let temp = arr[index];
        arr[index] = arr[index2];
        arr[index2] = temp;
        flag = true;
      }
    }
    if (!flag) {
      return arr;
    }
  }
  return arr;
};
let arr = [4, 3, 2, 5, 1];
const result = _name_(arr);
console.log(result);
