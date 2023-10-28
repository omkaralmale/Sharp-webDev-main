class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  calculate_area() {
    console.log(this.side1 * this.side2 * this.side3);
  }
  calculate_perimeter() {
    console.log(this.side1 + this.side2 + this.side3);
  }
}

const rect1 = new Triangle(10, 20, 30);
rect1.calculate_area();
rect1.calculate_perimeter();
