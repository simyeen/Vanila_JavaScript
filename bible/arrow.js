// var point = 100;
// function sports() {
//   function getPoint() {
//     console.log(this.point);
//   }
//   getPoint();
// }

// sports();

const list = [1, 2, 3, 4];
const one = { book: 30, music: 20 };
const result = { book: 30, ...one };
console.log(result);
console.log(...list);

function point(...rest) {
  console.log(rest);
}

const values = { key: 1, key2: 2 };
point(...list);
