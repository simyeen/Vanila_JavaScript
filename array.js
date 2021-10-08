var arr = new Array();
var arr2 = [1, 2, 3, 4];
var arr3 = new Array(3, 4);
console.log(arr.toString());

var result = "123".split("");
console.log(result);
console.log(arr3);

console.log(Object);

var fn = function () {
  return 1 > 0;
};

console.log(arr2.forEach(fn));

var list = [10, 20, 30, 40];

var fn = function (el, index, all) {
  console.log(el, this.num);

  if (el < 15) {
    return el + 1; // 이걸 true로 본다.
  }
};

function fn2(el, index, all) {
  if (index >= 1) {
    return index;
  }
}

console.log(list.filter(fn2, { num: 15 }));

var a = list.map(fn2);
console.log(a);
