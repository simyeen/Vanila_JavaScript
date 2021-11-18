function* sports(one) {
  yield one + 10;
  yield;
  const value = yield one + 50;
}

const obj = sports(30);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next(200));
