const _name_ = function (arr) {
  const seenSums = new Set();
  let cumulativeSum = 0;

  for (let i = 0; i < arr.length; i++) {
    cumulativeSum += arr[i];

    if (cumulativeSum === 0 || seenSums.has(cumulativeSum)) {
      return true;
    }

    seenSums.add(cumulativeSum);
  }

  return false;
};
let arr = [5, 4, 2, -3, 1, 6];
const result = _name_(arr);
console.log(result);
