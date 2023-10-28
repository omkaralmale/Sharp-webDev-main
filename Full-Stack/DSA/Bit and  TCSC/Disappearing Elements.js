const _name_ = function (arr) {
  let correctPosition = [];
  let ans = [];
  correctPosition[0] = 0;
  for (let index = 0; index < arr.length; index++) {
    correctPosition[arr[index]] = arr[index];
  }
  for (let index = 0; index < correctPosition.length; index++) {
    if (correctPosition[index] == null) {
      ans.push(index);
    }
  }
  return ans;
};
let arr = [3, 4, 5, 6, 2, 7, 8, 2, 1];
const result = _name_(arr);
console.log(result);
