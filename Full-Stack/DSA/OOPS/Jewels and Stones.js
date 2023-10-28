const _name_ = function (jewels, stones) {
  let set = new Set(jewels);
  let count = 0;
  for (char of stones) {
    set.has(char) ? count++ : true;
  }
  return count;
};
let jewels = "aA";
let stones = "aAAbbbb";
const result = _name_(jewels, stones);
console.log(result);
