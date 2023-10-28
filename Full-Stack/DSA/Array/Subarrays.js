const _name_ = function (arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const subarray = arr.slice(i, j + 1);
      console.log(subarray);
    }
  }
};
const arr = [1, 2, 3];
const result = _name_(arr);
console.log(result);
