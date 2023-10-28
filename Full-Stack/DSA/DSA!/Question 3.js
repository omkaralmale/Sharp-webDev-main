const _name_ = function (matrix) {
  let leftMax = -Infinity;
  let rightMax = -Infinity;
  let len = matrix.length;
  for (let index = 0; index < len; index++) {
    let len2 = matrix[index].length;
    for (let index2 = 0; index < len2; index++) {
      if (leftMax < matrix[index][index]) {
        leftMax = matrix[index][index];
      }
      if (index + index2 == matrix[index].length - 1) {
        if (rightMax < matrix[index][index2]) {
          rightMax = matrix[index][index2];
        }
      }
    }
  }
  return [leftMax, rightMax];
};
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const result = _name_(matrix);
console.log(result);
