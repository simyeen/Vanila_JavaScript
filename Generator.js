const sports = function* (one, ...rest) {
  yield one;
  yield;
  yield rest[0];
  yield;
  yield;
};

const obj = sports(100, 200, 300);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
