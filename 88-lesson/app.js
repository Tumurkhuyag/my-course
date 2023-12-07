// ES5 - Массив задлах
// ----------------------------
var arr1 = ["Нараа", 23, "Баянзүрх 16 хороо 32-5", "Програмист"];

var firstName = arr1[0];
var age = arr1[1];
var address = arr1[2];
var job = arr1[3];

console.log(
  "нэр нь: " +
    firstName +
    ", нас нь: " +
    age +
    ", хаяг нь: " +
    address +
    ", мэргэжил нь: " +
    job
);

// ES6 - Массив задлах
// ----------------------------
let arr2 = ["Нараа", 23, "Баянзүрх 16 хороо 32-5", "Програмист"];

let [a, b, c, d] = arr2;
console.log(`нэр нь: ${a}, нас нь: ${b}, хаяг нь: ${c}, мэргэжил нь: ${d}`);

// ES6 - Обьект задлах
// ----------------------------
let human = {
  name: "Tom",
  age: "18",
  address: {
    state: "CA",
    city: "Los-Angeles",
    street: "91-02",
  },
};

let {
  name,
  address: { city },
  age: nas,
} = human;

console.log(`${name}, ${nas} настай. ${city} хотод амьдардаг.`);

// ES6 - Функцээс буцаасан массив задлах
// ----------------------------
function my() {
  return [2, 5, 45, 10];
}

let [m1, m2, t, z] = my();
console.log(z);
