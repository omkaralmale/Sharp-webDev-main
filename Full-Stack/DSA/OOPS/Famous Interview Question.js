class count_objects {
  static count = 0;
  constructor() {
    count_objects.count++;
  }
}
const acc = new count_objects();
const acc1 = new count_objects();
const acc2 = new count_objects();
const acc3 = new count_objects();
// const acc4 = new count_objects();-
console.log(count_objects.count);
