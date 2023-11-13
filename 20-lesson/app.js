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
  var evenNumList = [];
  for (var i = 1; i <= input; i = i + 1) {
    i % 2 === 1 ? oddNumList.push(i) : evenNumList.push(i);
  }

  if (input >= 1) {
    myFunction();
    function myFunction() {
      var result = "<p> " + input + " хүртэлх сондгой тоонууд</p>";
      oddNumList.forEach(function (listItem) {
        result += "<li>" + listItem + "</li>";
      });

      document.getElementById("demo").innerHTML = result;
      console.log("Even numbers " + evenNumList);
    }
  } else {
    alert("Уучлаарай! Та нэгээс их тоон утга оруулна уу!");
  }
}
