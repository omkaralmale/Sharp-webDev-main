function countPerfectTeams(arr) {
  let count = 0;
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      const teamSum = arr[i] + arr[j];
      if (teamSum % 3 === 0) {
        count++;
      }
    }
  }
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        const teamSum = arr[i] + arr[j] + arr[k];
        if (teamSum % 3 === 0) {
          count++;
        }
      }
    }
  }
  return count;
}

const arr1 = [3, 6, 7, 2, 9];
const output1 = countPerfectTeams(arr1);
console.log(output1);

const arr2 = [2, 1, 3, 4];
const output2 = countPerfectTeams(arr2);
console.log(output2);
