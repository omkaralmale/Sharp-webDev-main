var maximum = function (arr) {
  let maxRow = -1; // Initialize the index of the row with the most students to -1
  let maxCount = -1; // Initialize the maximum student count to -1

  const row = arr.length; // Number of rows
  const colomn = arr[0].length; // Number of columns

  for (let i = 0; i < row; i++) {
    let count = 0; // Initialize the count of students in the current row to 0

    for (let j = 0; j < colomn; j++) {
      if (arr[i][j] === 1) {
        count++; // Increment the count for each present student
      }
    }

    if (count > maxCount) {
      maxCount = count;
      maxRow = i;
    }
  }

  return maxRow;
};
// Example 1:
// Input:
// N = 4 ,
// M = 4
// Arr[][] =
// {{0, 1, 1, 1},
// {0, 0, 1, 1},
// {1, 1, 1, 1},
// {0, 0, 0, 0}}

// Output: 2
// Explanation: Row 3 contains 4 1's
