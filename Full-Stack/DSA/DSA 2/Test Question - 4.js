var search = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};
// Example 1:-
// Input:-
// Arr - [9,5,3, 2,1]
// Target - 5
// Output:-
// 1
