const item = "book";
const result = ({ [item]: title } = { book: "책" });
console.log(result[item]);

const k = [a, (b = a + 20), (c = b + 50)];
console.log(k);

