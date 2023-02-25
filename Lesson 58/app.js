// IIFE ---> Immediately  Invoked Function Expression
/*
Function statement
function hi() {
  document.getElementById("hi").textContent = "Сайн уу";
}

hi();

Function expression
var howAreYou = function () {
  document.getElementById("news").textContent = "Сонин сайхан юу байна?";
};

howAreYou();
*/

// IIFE ---> Immediately Invoked Function Expression -ын давуу тал "name" хувьсагч холилдохгүй, функцуудад нэр өгөх шаардлагагүй
// Advantage of IIFE is private, data encapsulation, data protection
(function () {
  var name = "Tom";
  document.getElementById("hi").textContent = name + " Сайн уу!";
  (function () {
    var name = "Taivnnna";
    document.getElementById("response").textContent =
      name + ": Хээе! Сайн сайн.";
  })();
  document.getElementById("news").textContent =
    name + ": Сонин сайхан юу байна?";
})();
