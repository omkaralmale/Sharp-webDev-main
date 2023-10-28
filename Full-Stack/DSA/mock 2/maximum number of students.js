const findMajority = function (arr) {
  let count = 1;
  let ele = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      ele = arr[i];
      count = 1;
    }
  }

  return ele;
};
const arr = [3, 2, 3];
console.log(findMajority(arr)); // Output: 2
