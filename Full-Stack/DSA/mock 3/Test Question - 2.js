var isValid = function (s) {
  let map = new Map();
  for (let index = 0; index < s.length; index++) {
    if (map.has(s[index])) {
      map.set(s[index], map.get(s[index]) + 1);
    } else {
      map.set(s[index], 1);
    }
  }
  // console.log(map)
  for (const [key, values] of map) {
    if (values == 2) {
      return true;
    } else {
      return false;
    }
  }
};

// Example 1:

// Input: s = "aba"

// Output: True
