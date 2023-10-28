function natural_numbers(n) {
  /* Function to return the sum of  n natural numbers*/
  if (n == 1) {
    return 1;
  }
  return n + natural_numbers(n - 1);
}
