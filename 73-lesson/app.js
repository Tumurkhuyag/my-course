var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");

a.addEventListener("click", function (par) {
  console.log("a дарагдлаа: " + par.target.id);
});

// b.addEventListener("click", function (par) {
//   console.log("b дарагдлаа");
// });

// c.addEventListener("click", function (par) {
//   console.log("c дарагдлаа");
// });

// d.addEventListener("click", function (par) {
//   console.log("d дарагдлаа");
// });
