function* sports(one) {
  yield one + 10;
  yield;
  const value = yield one + 50;
  const value2 = yield one + 50;
  console.log("ㅎㅇ", value, value2);
}

const obj = sports(30);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next(200));
console.log(obj.next(201));
