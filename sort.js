var value = [1, 2, 3, 4, 0];

console.log(
  value.sort(function (a, b) {
    return b - a;
  })
);

var arr = [2, 2, 3, 4, 5];
console.log(arr.every((el) => el <= 10));

console.log(Array.isArray(arr));

var fn = function (el, index, all) {};
var list = [];
for (var i = 0; i < 1000000; i++) {
  list.push(0);
}

var start = Date.now();
list.forEach(fn);
var end = Date.now();

console.log(end - start);
