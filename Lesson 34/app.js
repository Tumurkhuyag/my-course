// Execution stack хэрхэн ажиллаж байгааг console -оос хараарай!
// Scope chain хэрхэн үүссэн, яаж ажиллаж байгаа нь console дээр харуулж буй хувьсагчуудаар илрэнэ

var a = "Hello!";
first();

console.log("---- Global Execution context ----");
console.log("a = " + a + " is global scope");
// console.log("b = " + b);
// console.log("c = " + c);
// console.log("d = " + d);
console.log("--------------------------------------");

function first() {
  var b = "Hi!";
  second();

  console.log("---- first() Execution context ----");
  console.log("a = " + a + " is global scope");
  console.log("b = " + b + " is first scope");
  // console.log("c = " + c);
  // console.log("d = " + d);

  function second() {
    var c = "Hey!";
    third();

    console.log("---- second() Execution context ----");
    console.log("a = " + a + " is global scope");
    console.log("b = " + b + " is first scope");
    console.log("c = " + c + " is second scope");
    // console.log("d = " + d);
  }
}

function third() {
  var d = "John";

  console.log("---- third() Execution context ----");
  console.log("a = " + a + " is global scope");
  // console.log("b = " + b);
  // console.log("c = " + c);
  console.log("d = " + d + " is third scope");
}
