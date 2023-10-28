const _name_ = function (arr, target) {
  let map = new Map();
  for (let index = 0; index < arr.length; index++) {
    if (map.has(target - arr[index])) {
      return [index, map.get(target - arr[index])];
    } else {
      map.set(arr[index], index);
    }
  }
};
let arr = [3, 3];
let target = 6;
const result = _name_(arr, target);
console.log(result);
