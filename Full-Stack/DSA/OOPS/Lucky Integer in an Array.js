const _name_ = function (arr) {
  let map = new Map();
  for (num of arr) {
    map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
  }
  return Math.max(...arr.filter((element) => map.get(element) == element), -1);
};
let arr = [1, 2, 2, 3, 3, 3];
const result = _name_(arr);
console.log(result);
