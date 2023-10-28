function print_output(n, multiple = 0) {
  if (multiple > n) {
    return;
  }
  console.log(multiple);
  print_output(n, multiple + 5);
}
print_output(5);
