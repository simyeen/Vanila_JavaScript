class Point {
  static value = 100;
}

console.log(Point.value);
Point.bonus = 300;
console.log(Point.bonus);
console.log(new Point().value, new Point().bonus);
