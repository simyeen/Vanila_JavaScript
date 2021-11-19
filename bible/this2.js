function Book(point) {
  this.point = point;
}

Book.prototype.getPoint = function () {
  //  this.setPoint(); // this가 obj이므로 obj.setPoint를 호출 => prototype 찾아서 호출
  console.log("point :", this.point);
  console.log("this", this);
  console.log(typeof this, typeof Book);
  return this.point;
};

Book.prototype.setPoint = function () {
  this.point = 100; // obj.point = 100으로 된다.
};

var obj = new Book(100);
obj.name = "남일";

console.log(obj.getPoint());
console.log(Book.prototype.getPoint());

var book = {
  a: 123,
  get: function () {
    var a = 456;
    console.log(this === window);
    console.log(this.a);
  },
};

var fn = book.get;
fn();
book.get();
