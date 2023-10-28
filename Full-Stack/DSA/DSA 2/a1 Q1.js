var AAA_sort = function (sentences) {
  function countA(s) {
    return s.split("").filter((c) => c == "a").length;
  }
  return sentences.sort((s1, s2) => {
    let first = countA(s1);
    let second = countA(s2);
    if (first > second) {
      return -1;
    } else if (second > first) {
      return 1;
    } else {
      let len1 = s1.length;
      let len2 = s2.length;
      if (len1 > len2) {
        return -1;
      } else if (len2 > len1) {
        return 1;
      } else {
        return 0;
      }
    }
  });
};
