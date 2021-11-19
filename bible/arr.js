var ul_list = ["<ul>"];
for (var i = 0; i < 10; i++) {
  var arr = ["<li id=id"];
  arr.push(String(i));
  arr.push(">id");
  arr.push(String(i));
  arr.push("</li>");
  console.log(arr.join(""));
  ul_list.push(arr.join(""));
}
ul_list.push("</ul>");

var arr = [1, 2, 3, 4, 5];
console.log(arr.slice(0, 2));
console.log(arr.splice(0, 1));
console.log(arr);
