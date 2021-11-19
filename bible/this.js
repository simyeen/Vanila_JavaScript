function Book() {
  console.log("1 :", this.point);
}

Book.prototype.getPoint = function () {
  this.setPoint(); // this가 obj이므로 obj.setPoint를 호출 => prototype 찾아서 호출
  console.log("2 :", this.point);
  console.log("this", this, this.name);
};

Book.prototype.setPoint = function () {
  this.point = 100; // obj.point = 100으로 된다.
};

var obj = new Book();
obj.name = "남일";
obj.getPoint();
