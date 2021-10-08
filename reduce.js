var value = [1, 3, 5, 7];

var fn = function (prev, curr, index, all) {
  console.log(prev, curr, index);
  return prev + curr;
};

var result = value.reduce(fn);

console.log(result);

var list = [1, 3, 5, 7];
var fn2 = function (acc, curr, index, all) {
  console.log(acc, curr, index);
  return acc + curr;
};

var initialValue = 10;
var result2 = list.reduce(fn2, initialValue);
console.log(result2);
