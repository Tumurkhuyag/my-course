var x = "123";
var y = 123;

console.log(typeof x);
console.log(typeof y);

var b = true;
var c = {};
var d = [];
console.log("d -ийн төрөл нь " + typeof d);

c.location = "ub";
c.coordinate = 12342;

d.push(234);

console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

var z = null;

console.log("z -ийн төрөл нь " + typeof z);

var e;

console.log(typeof e);

if (typeof y === "number") console.log("Энэ бол тоо");
else console.log(y + "-ийн төрөл нь " + typeof y);
