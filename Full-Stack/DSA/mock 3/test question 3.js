var revamp = function (arr) {
  arr.sort((a, b) => a - b);
  let count = 0;

  for (let index = 1; index < arr.length; index++) {
    if (arr[index] <= arr[index - 1]) {
      count += arr[index - 1] - arr[index] + 1;
      arr[index] = arr[index - 1] + 1;
    }
  }
  return count;
};
// arr[] = {1, 2, 2}
