var proLang = ["c#", "java", "python", "javascript"];

proLang[1] = "typescript";

proLang[4] = "c++";
proLang[proLang.length] = "dart";

proLang.unshift("assembler");
console.log(proLang.shift());

proLang.push("php");
console.log(proLang);

console.log("Хамгийн сүүлд байрлаж буй хэл: " + proLang[proLang.length - 1]);
console.log(
  "Pop функц ашиглан хамгийн сүүлд байрлаж буй хэлийг авах: " + proLang.pop()
);

console.log("Хоёрт байрлаж буй хэл: " + proLang[1]);
console.log(proLang.length + " төрлийн хэл байна");

console.log(proLang);
console.log(
  "Python хэл proLang[" +
    proLang.indexOf("python") +
    "] дугаартай өгөгдөл дотор байрлаж байна"
);

console.log(proLang);

var checkItemInList = function (itemName) {
  if (proLang.indexOf(itemName) === -1) {
    console.log(
      "Уучлаарай манай жагсаалтад " + itemName + " гэсэн мэдээлэл байхгүй байна"
    );
  } else
    console.log(
      "Таны хайсан " +
        itemName +
        " гэсэн мэдээлэл жагсаалтын " +
        (proLang.indexOf(itemName) + 1) +
        " -т байрласан байна"
    );
};

checkItemInList("javascript");
checkItemInList("assembler");
