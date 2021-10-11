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

function book2() {
  return "호이스팅";
}
