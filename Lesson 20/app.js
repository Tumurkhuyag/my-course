/*
console.log(1);
console.log(2);
console.log(3);

var input = prompt("Гараас тоо оруулна уу!");

for (var i = 1; i <= 10; i++) {
  console.log(i + "-р давталт");
}

console.log("10 хүртэлх сондгой тоонууд");
for (var i = 1; i <= 10; i = i + 2) {
  console.log(i);
}
*/

function findOddNum() {
  var input = prompt("Танд хэд хүртэлх сондгой тоонуудыг харуулах вэ?");

  var oddNumList = [];
  for (var i = 1; i <= input; i = i + 2) {
    oddNumList[i - 1] = i;
  }

  if (input >= 1) {
    myFunction();
    function myFunction() {
      var result = "";
      oddNumList.forEach(function (listItem) {
        result += "<li>" + listItem;
      });

      document.getElementById("demo").innerHTML = result;
    }
  } else {
    alert("Уучлаарай! Та нэгээс их тоон утга оруулна уу!");
  }
}
