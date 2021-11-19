var member = {
  Jan: { item: { title: "JS북", amount: 100 }, point: [10, 20, 30] },
  Feb: { item: { title: "JS북", amount: 200 }, point: [40, 50, 60] },
};

function show(param) {
  for (var type in param) {
    if (typeof param[type] === "object") show(param[type]);
    else if (typeof param[type] != "array") {
      console.log(type + ":", param[type]);
    }
  }
}

show(member);

var a = function () {
  return 100;
};

console.log(a());
