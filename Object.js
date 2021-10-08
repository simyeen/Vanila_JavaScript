var obj = { a: 1, b: 2 };

Object.defineProperty(obj, "a", {
  //value: "3",
  enumerable: false,
  get: function () {
    console.log("get함수 호출");
    return "getget";
  },
});

for (var o in obj) {
  console.log(o, obj[o]);
}

var names = Object.getOwnPropertyDescriptor(obj);
console.log(names);

var obj2 = {};
Object.defineProperty(obj2, "book", {
  value: "책",
  writable: true,
  enumerable: true,
});

console.log(obj2);

Object.freeze(obj2);
try {
  obj2.book = "책 변경";
  console.log(obj2);
} catch (e) {
  console.log("프리즈 걸어놓음");
}

var arr = [5, 2, 3, 4];
console.log(Math.min(...arr));
