var single_element = function (arr) {
  let map = new Map();
  for (let index = 0; index < arr.length; index++) {
    if (map.has(arr[index])) {
      map.set(arr[index], map.get(arr[index]) + 1);
    } else {
      map.set(arr[index], 1);
    }
  }
  for (let [keys, values] of map) {
    if (values == 1) {
      return keys;
    }
  }
};
// nums = [2,2,3]
// nums = [0,1,0,1,99]
