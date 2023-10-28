const _name_ = function (sentences) {
  let count = 0;
  let maxcountindex = -1;
  for (let index = 0; index < sentences.length; index++) {
    let word = sentences[index];
    const aCount = (word.match(/a/g) || []).length;
    if (aCount > count) {
      count = aCount;
      maxcountindex = index;
    }
  }
  return maxcountindex;
};
let sentences = [
  "ananya loves sharpener",
  "apple is a very healthy fruit",
  "this is great thanks very much",
];
const result = _name_(sentences);
console.log(result);
