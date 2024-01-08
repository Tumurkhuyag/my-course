// Дэлгэц дээр өнөөдрийн он, сарыг харуулах
var today = new Date();
console.log(today.getFullYear() + " оны " + today.getMonth() + "-р сарын ");

// String мөнгөн дүнг мянгатын орноор форматлах
a = "123456789";
x = a.split("").reverse().join("");
console.log(x);
document.getElementById("1").innerText = y = a.split("");
document.getElementById("2").innerText = y = a.split("").reverse();
document.getElementById("3").innerText = y = a.split("").reverse().join("");

var count = 1;

for (let i = 0; i < x.length; i++) {
  y = y + x[i];

  if (count % 3 === 0) y = y + ",";
  count++;
}

console.log(y);

z = y.split("").reverse().join("");

console.log(z);

if (z[0] === ",") z = z.substr(1, z.length - 1);

console.log(z);
