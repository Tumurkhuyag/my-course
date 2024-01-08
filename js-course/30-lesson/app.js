// Execution context
// 1. Variables & Functions
// 2. THIS
// 3. Scope chain

// Execution stack

var nickName = "Tom";

function first() {
  a = "Hello ";
  second();
  b = a + nickName;
  console.log(b);
}

function second() {
  c = "Hi ";
  third();
  d = c + nickName;
  console.log(d);
}

function third() {
  x = "Hey ";
  z = x + nickName;
  console.log(z);
}

first();
