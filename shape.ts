abstract class ShapuSan {
  abstract getArea(): number;
}

class Circle extends ShapuSan {
  constructor(public radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Rectangle extends ShapuSan {
  constructor(public width: number, public height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

// Example usage:
const circle = new Circle(5);
const rectangle = new Rectangle(4, 3);

console.log(circle.getArea()); // Output: 78.53981633974483
console.log(rectangle.getArea()); // Output: 12
