// Javascript implementation of the approach

// Function to print the maximum for
// every k size sub-array
function print_max(a, n, k) {
  // max_upto array stores the index
  // upto which the maximum element is a[i]
  // i.e. max(a[i], a[i + 1], ... a[max_upto[i]]) = a[i]
  let max_upto = new Array(n);

  // Update max_upto array similar to
  // finding next greater element
  let s = [];
  s.push(0);

  for (let i = 1; i < n; i++) {
    while (s.length != 0 && a[s[s.length - 1]] < a[i]) {
      max_upto[s[s.length - 1]] = i - 1;
      s.pop();
    }
    s.push(i);
  }

  while (s.length != 0) {
    max_upto[s[s.length - 1]] = n - 1;
    s.pop();
  }
  let j = 0;
  for (let i = 0; i <= n - k; i++) {
    // j < i is to check whether the
    // jth element is outside the window
    while (j < i || max_upto[j] < i + k - 1) {
      j++;
    }
    console.log(a[j] + " ");
  }
}

// Driver code
let a = [9, 7, 2, 4, 6, 8, 2, 1, 5];
let n = a.length;
let k = 3;

print_max(a, n, k);
