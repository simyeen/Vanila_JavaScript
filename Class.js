var Book = function (point) {
  this.point = point;
  this.title = "JS책";

  this.print = function () {
    console.log("print호출");
    return;
  };
};

Book.prototype.getBook = function () {
  return this.point + 100;
};

Book.prototype.print2 = function () {
  console.log("print2호출");
  return 1;
};

var oneInstance = new Book(200);
console.log(oneInstance.getBook());
console.log(Book.prototype.print2());

var bookObj = {
  title: "JS책",
  concat: function (data) {
    return data.concat();
  },
};
