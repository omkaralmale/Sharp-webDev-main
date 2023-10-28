function product_numbers(n) {
  /* Function to return the product of n natural numbers */
  if (n == 1) {
    return 1;
  }
  return n * product_numbers(n - 1);
}
