// Execution context: Ажиллах орчин
// Execution stack: Ажиллах орчинг агуулж буй санах ойн тусгай орон зайн хэсэг

// Үүсгэх шат, Ажиллуулах шат

console.log(a);
console.log(b);
console.log(c);

var a = "Tom";

console.log(a);

function b(p) {
  var x = "Uno";
  console.log("Энэ бол statement функц " + x + " " + p);
}

var c = function () {
  var y = "Batula";
  console.log("Энэ бол expression функц " + y);
};

b(c);
