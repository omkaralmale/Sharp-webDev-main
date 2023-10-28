class Student {
  constructor(name = "Nitin", rollNumber = 0) {
    this.name = name;
    this.rollNumber = rollNumber;
  }
  display() {
    console.log(this.name);
  }
}

const Student1 = new Student();
Student1.display();
const Student2 = new Student("Om", 1);
Student2.display();
