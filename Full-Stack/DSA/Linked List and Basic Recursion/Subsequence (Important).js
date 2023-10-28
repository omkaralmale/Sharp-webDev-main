function sunsq(arr, index = 0, current = []) {
  if (index === arr.length) {
    if (current.length > 0) {
      console.log(current);
    }

    return;
  }

  current.push(arr[index]);

  sunsq(arr, index + 1, current);

  current.pop();

  sunsq(arr, index + 1, current);
}
