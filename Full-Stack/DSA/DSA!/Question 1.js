const _name_ = function (arr, target) {
  const len = arr.length;
  let count = 0;
  for (let index = 0; index < len; index++) {
    if (arr[index] >= target) {
      count++;
    }
  }
  return count;
  //   const count = arr.filter((num) => num >= 3).length;
  //   return count;
};
let inventory = [1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 7];
let target = 3;
const result = _name_(inventory, target);
console.log(result);
