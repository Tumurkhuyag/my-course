// Value (Premitive буюу энгийн утга дамжуулахад шинээр үүр үүсч хуулбарлагддаг)

var a = 14;
var b = a;

b = 13;

console.log("a = " + a);
console.log("b = " + b);

// Reference (Обьектуудад reference байдлаар буюу заагчаар утга олгогддог)

var p1 = {
  name: "Батаа",
  age: 18,
};

var p2 = p1;

p1.name = "Зулаа";
p2.age = 22;

console.log("p1 = " + p1.name + ", " + p1.age);
console.log("p2 = " + p2.name + ", " + p2.age);

//////////////////////////////////////////////////////////////////////////

var x = [2, 4, 10];
var y = x;

x[0] = 5000;
y[2] = 22;

console.log("x = " + x);
console.log("y = " + y);

//////////////////////////////////////////////////////////////////////////

var name = "iPhone 13 pro";
var price = 3000000;

info(name, price);
console.log("Бүтээгдэхүүн: " + name);
console.log("Хямдраагүй үнэ: " + price);

function info(name, price) {
  console.log(name + " нэртэй бүтээгдэхүүн " + price + " үнэтэй байсан");
  price = price - 50000;
  console.log(name + " " + price + " болж хямдарлаа!");
}

//////////////////////////////////////////////////////////////////////////

var product = {
  name: "iPhone 14 pro",
  price: 5000000,
};

newInfo(product);
console.log("Бүтээгдэхүүн: " + product.name);
console.log("Хямдраагүй үнэ: " + product.price);

function newInfo(product) {
  console.log(
    product.name + " нэртэй бүтээгдэхүүн " + product.price + " үнэтэй байсан"
  );
  product.price = product.price - 100000;
  console.log(product.name + " " + product.price + " болж хямдарлаа!");
}
