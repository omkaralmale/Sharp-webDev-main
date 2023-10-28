var conquer = function (nums, start, mid, end) {
  let mergeArray = [];

  let index1 = start;

  let index2 = mid + 1;

  let mainIndex = 0;

  while (index1 <= mid && index2 <= end) {
    if (nums[index1] <= nums[index2]) {
      mergeArray[mainIndex] = nums[index1++];
    } else {
      mergeArray[mainIndex] = nums[index2++];
    }

    mainIndex++;
  }

  while (index1 <= mid) {
    mergeArray[mainIndex] = nums[index1++];

    mainIndex++;
  }

  while (index2 <= end) {
    mergeArray[mainIndex] = nums[index2++];

    mainIndex++;
  }

  for (let i = 0, j = start; i < mergeArray.length; i++, j++) {
    nums[j] = mergeArray[i];
  }
};

var divide = function (nums, start, end) {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);

    divide(nums, start, mid);

    divide(nums, mid + 1, end);

    conquer(nums, start, mid, end);
  }
};

var sortArray = function (nums) {
  let start = 0;

  let end = nums.length - 1;

  divide(nums, start, end);

  return nums;
};

console.log(
  sortArray([2, 5, 10, 48, 1, 5, 4, 41, 51, 84, 4, 4184, 11, 531, 56])
);
