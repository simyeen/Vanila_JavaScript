function book() {
  console.log(title);
  console.log(readBook);
  console.log(getBook);

  debugger;
  var title = "JS book";
  function getBook() {
    return title;
  }
  var readBook = function () {};
  getBook();
}
book();

var result = book2();
console.log(result);

function book2() {
  return "호이스팅";
}
