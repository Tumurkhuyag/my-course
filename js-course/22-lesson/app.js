var data = [12, 13, 17, 90, 60, 62, 21, 212, 43, 53, 61];
document.getElementById("problem").innerHTML = data;

function myfunction() {
  for (var index = 0; index < data.length; index++) {
    if (data[index] % 7 !== 0) continue;
    var element = "";
    element = data[index];
    document.getElementById("solution").innerHTML =
      "7 -д хуваагддаг тоо " +
      (index + 1) +
      " дахь тоо буюу ' " +
      element +
      " ' гэж олдлоо";
    console.log(element);
    break;
  }
  if (index == data.length && data[index - 1] % 7 !== 0) {
    document.getElementById("solution").innerHTML =
      "Тийм тоо жагсаалтад алга байна!";
  }
}
