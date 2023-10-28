const _name_ = function (full, empty) {
  let temp = 0;
  while (full >= empty) {
    full = full - empty + 1;
    temp += empty;
  }
  return temp + full;
};
let numCoconuts = 15;
let numExchange = 4;
const result = _name_(numCoconuts, numExchange);
console.log(result);
