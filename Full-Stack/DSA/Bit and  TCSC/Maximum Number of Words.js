const _name_ = function (sentences) {
  let count = 0;
  for (let index = 0; index < sentences.length; index++) {
    let word = sentences[index].split(" ").length;
    if (count < word) {
      count = word;
    }
  }
  return count;
};
let sentences = ["please wait", "continue to fight", "continue to win"];
const result = _name_(sentences);
console.log(result);
