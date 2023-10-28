//selection sort
const _name_ = function (arr) {
  let flag = false;
  for (let index = 0; index < arr.length; index++) {
    let minIndex = index;
    for (let index2 = index; index2 < arr.length; index2++) {
      if (arr[index2] < arr[minIndex]) {
        minIndex = index2;
      }
    }
    let temp = arr[index];
    arr[index] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
};
let arr = [4, 3, 2, 5, 1];
const result = _name_(arr);
console.log(result);
