// nput: str = "HELLO WORLD"

// Output: 3

// Explanation: vowels in the given string are: E, O, O

function countVowels(str) {
  const vowelRegex = /[AEIOUaeiou]/g;

  const vowelMatches = str.match(vowelRegex);

  if (vowelMatches) {
    return vowelMatches.length;
  } else {
    return 0;
  }
}
