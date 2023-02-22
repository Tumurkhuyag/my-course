// Массивт давталтаар санамсаргүй 10 тоо оруулна
var arr = [];
for (var i = 0; i < 10; i++) {
  var num = Math.random() * 100;
  roundNum = Math.floor(num);
  arr.push(roundNum);
}

console.log(arr);

// Массивт байгаа бүх элементүүдийг шалгаж хамгийн бага утгыг MIN, хамгийн их утгыг MAX гэж хадгална
var max = arr[0];
var min = arr[0];

for (var i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    var maxIndex = i;
  }

  if (arr[i] < min) {
    min = arr[i];
    var minIndex = i;
  }
}

console.log("MAX = " + max, maxIndex);
console.log("MIN = " + min, minIndex);

// MIN болон MAX тэнцүү биш бол энэ хоёрын байрыг солино
if (max !== min) {
  var conNum = arr[maxIndex];
  arr[maxIndex] = arr[minIndex];
  arr[minIndex] = conNum;
}

// Сольсон массиваа хэвлэж үзүүлнэ
console.log(arr);
