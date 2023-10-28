const _name_ = function (str) {
  let numbers = [];
  let index2 = 0;
  for (let index = 0; index < str.length; index++) {
    if (str.charCodeAt(index) >= 48 && str.charCodeAt(index) <= 57) {
      index2 = index;
      while (
        index2 < str.length &&
        str.charCodeAt(index2) >= 48 &&
        str.charCodeAt(index2) <= 57
      ) {
        index2++;
      }
      numbers.push(parseInt(str.substring(index, index2)));
      index = index2;
    }
  }
  return numbers;
};

let str = "abc3000v44d";
const result = _name_(str);
console.log(result);
