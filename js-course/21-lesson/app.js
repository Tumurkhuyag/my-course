function myfunction() {
  var input = "";
  var pushUps = [];

  while (input !== "Зогс") {
    input = prompt("Суниах уу? Stop гэж бичвэл болионо");
    pushUps.push(input);
    console.log(pushUps);
  }

  var result = "";
  pushUps.forEach(function (command) {
    result += "<dt>" + command + "</dt>";
    console.log(result);
  });

  document.getElementById("demo").innerHTML = result;
}

/*
Нөхцлийг эхлээд шалгаж байж ажилладаг while loop бичиглэл
---------------

while (шалгах нөхцөл) {
Нөхцөл үнэн тохиолдолд хийх үйлдэл
}


Нөхцөл шалгахаас өмнө ядаж нэг удаа ажилладаг while loop бичиглэл
---------------

do {
Нэг удаа ажиллаад нөхцөл үнэн тохиолдолд үргэлжлүүлж ажиллах үйлдэл
} while (шалгах нөхцөл);
*/
