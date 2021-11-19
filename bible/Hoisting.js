function book() {
  var getBook = function () {
    return "책1";
  };

  console.log(getBook());

  function getBook() {
    return "책2";
  }
}
book();
