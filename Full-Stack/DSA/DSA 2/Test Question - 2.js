function sort_array(arr, length) {
  /*Function to sort the array in descending order
    After sorting return the sorted array */
  arr.sort((a, b) => {
    const diffA = Math.abs(a - 5);
    const diffB = Math.abs(b - 5);

    if (diffA === diffB) {
      return a - b;
    }

    return diffA - diffB;
  });
  return arr;
}
// [1,3,5,7,9]
// [5,3,7,1,9]
