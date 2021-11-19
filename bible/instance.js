function Book(point) {
  this.point = point;
}

Book.prototype.getPoint = function () {
  return this.point + 200;
};

var obj = new Book(100);
console.log(obj.point);
console.log(obj.getPoint());

console.log(obj.print);
Book.prototype["print"] = function () {
  console.log("print함수");
  return 1000;
};
console.log(obj.print());
