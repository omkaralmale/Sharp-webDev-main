function char(A) {
  const Cnt = {};
  const q = [];
  let res = "";

  for (const ch of A) {
    Cnt[ch] = (Cnt[ch] || 0) + 1;
    q.push(ch);

    while (q.length > 0 && Cnt[q[0]] > 1) {
      q.shift();
    }

    res += q.length > 0 ? q[0] : "#";
  }

  return res;
}
