const _name_ = function (n) {
  let count = 0;
  let arr = [];
  let isPrime = new Array(n * 10).fill(true);
  // console.log(isPrime);
  isPrime[0], (isPrime[1] = false);
  for (let index = 2; index < isPrime.length; index++) {
    if (isPrime[index]) {
      arr.push(index);
      count++;
    }
    if (count == n) {
      break;
    }
    for (let index2 = index * index; index2 < isPrime.length; index2 += index) {
      isPrime[index2] = false;
    }
  }
  return arr;
};
let n = 5;
const result = _name_(n);
console.log(result);
