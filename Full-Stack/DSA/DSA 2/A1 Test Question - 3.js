var twoSum = function (arr, target) {
  const numSet = new Set(); // A Set to store the numbers we've seen
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (numSet.has(complement)) {
      // If the complement exists in the Set, we found a pair
      const complementIndex = arr.indexOf(complement);
      return [complementIndex, i];
    }
    numSet.add(arr[i]);
  }
  return null; // If no such pair exists
};
