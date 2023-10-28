class Student {
  constructor(name = "Nitin", rollNumber = 0) {
    this.name = name;
    this.rollNumber = rollNumber;
  }
}

const Student1 = new Student();
console.log(Student1.name);
const Student2 = new Student("Om", 1);
console.log(Student2.name);
