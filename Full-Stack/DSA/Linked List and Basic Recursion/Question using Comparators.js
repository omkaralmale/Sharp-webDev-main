class Employee {
  constructor(name, salary) {
    this.name = name;

    this.salary = salary;
  }
}

let Employees = [
  new Employee("vijay", 50000),

  new Employee("aman", 10000),

  new Employee("pravin", 90000),

  new Employee("mahesh", 70000),

  new Employee("rahul", 30000),
];

Employees.sort((a, b) => b.salary - a.salary);

Employees.forEach((Employee) => {
  console.log(`${Employee.name} ${Employee.salary}`);
});
