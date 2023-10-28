//Insertion Sort
const _name_ = function () {
  let len = arr.length;
  for (let index = 1; index < len; index++) {
    let key = arr[index];
    let prev = index - 1;
    while (prev >= 0 && arr[prev] > key) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = key;
  }
  return arr;
};
let arr = [4, 3, 2, 5, 1];
const result = _name_();
console.log(result);
