function book() {
  console.log(title);
  console.log(readBook);
  console.log(getBook);

  var title = "JS book";
  function getBook() {
    return title;
  }
  var readBook = function () {};
  getBook();
}
book();

var result = book2();
debugger;
function book2() {
  return "호이스팅";
}
debugger;

var obj = { point: 100 };
obj.getPoint = function () {
  return this.point;
};
debugger;
obj.getPoint();

debugger;
