function book() {
  let st = "a";
  var point = 100;
  var getPoint = function (param) {
    point = point + param;
    return point;
  };
  return getPoint;
}

var obj = book();
console.log(obj(200));

{
  let test = "test";
  console.log(test);
}
