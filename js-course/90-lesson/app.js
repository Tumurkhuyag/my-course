// NodeList дээр foreach давталт ашиглаж болдоггүй учир massiv болгох
// --------------------------------------------
const boxes = document.querySelectorAll(".box");
console.log(typeof boxes);

// NodeList -ийн утгуудыг бүгдийг нь эхнээс нь дуустал задалж массив дотор хийх
// --------------------------------------------
// let arr = Arr.from(boxes);
let arr = [...boxes];
arr.forEach((el) => (el.style.backgroundColor = "red"));

// Массивийн утгуудыг нэр өгсөн хувьсагчидруу задалж оруулах
// --------------------------------------------
const names = ["John", "Marry", "Mike"];
let [first, second, third] = names;
console.log(second);

// Change функц руу шууд boxes massiv -ийг дамжуулах
// --------------------------------------------
change(...boxes);

function change(a, b) {
  a.style.backgroundColor = "green";
  b.style.backgroundColor = "dodgerblue";
}

// Spread оператор ашиглан хоёр массивийг нэгтгэх
// --------------------------------------------
let interpretators = ["php", "perl", "javascript", "python", "typescript"];
let compilers = ["java", "c", "c#"];

let languages = [...interpretators, "assembler", ...compilers];

console.log(languages);
