var x = "123";
var y = 123;

console.log(typeof x);
console.log(typeof y);

var b = true;
var c = {};

c.location = "ub";
c.coordinate = 12342;

var d = [];

d.push(234);

console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

var z = null;

console.log(typeof z);

var e;

console.log(typeof e);

if (typeof y === "number") console.log("Энэ бол тоо");
else console.log(y + "-ийн төрөл нь " + typeof y);
