function maxFromBothDiagonals(matrix) {
  let maxright = -Infinity;
  let maxleft = -Infinity;
  for (let index = 0; index < matrix[0].length; index++) {
    for (let index2 = 0; index2 < matrix[0].length; index2++) {
      if (index == index2) {
        if (maxleft < matrix[index][index2]) {
          maxleft = matrix[index][index2];
        }
      }

      if (index + index2 == matrix[0].length - 1) {
        if (maxright < matrix[index][index2]) {
          maxright = matrix[index][index2];
        }
      }
    }
  }
  return [maxleft, maxright];
}
// Input:
// 1 2 3
// 4 5 6
// 7 8 9
// Output: 9 7
// Explanation: The maximum element in the diagonals is 9 and 7 respectively.
