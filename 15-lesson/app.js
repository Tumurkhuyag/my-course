// statement vs expression function

// Тооны модулыг хэлдэг функц хийцгээе!
// Жишээ нь |-13| = 13,  |25| = 25

// Expression function бичиглэл
var module = function (number) {
  var mod;
  if (number < 0) mod = -number;
  else mod = number;

  return mod;
  // console.log("Expression function ажиллалаа! Орж ирсэн утга: " + number);
  // console.log(number + " тооны модул нь " + mod);
};

// 3 тооны модулын нийлбэрийг олдог функц
// |x| + |y| + |z|

var sumOfMods = function (x, y, z) {
  return module(x) + module(y) + module(z);
};

console.log(sumOfMods(8, -10, 20));

// Statement function бичиглэл
// function mod(number) {
//  console.log("Statement function ажиллалаа! Орж ирсэн утга: " + number);}
// mod(12);
