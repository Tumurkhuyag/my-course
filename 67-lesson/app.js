// financeController IIFE функц дотор public service бичиж далдлагдсан хувьсагч, функцуудад хандах

// appController -оос financeController -ын private хувьсагч, функцуудруу хандах боломжтой болгох

// Массивын хамгийн сүүлийн элементийн утга дээр нэгийг нэмэх байдлаар гүйлгээний ID -ыг загварчлах

var data = {
  items: {
    inc: [],
    exp: [],
  },

  totals: {
    inc: 1000,
    exp: 0,
  },
};

var id = "id";
var desc = "Цалин";
var value = 250000;

data.items["inc"].push(desc);
data.items["inc"].push(value);
console.log(data.items["inc"]);
