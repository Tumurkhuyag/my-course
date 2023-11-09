var birthYear = prompt("Та хэдэн онд төрсөн бэ?");
currentYear = new Date().getFullYear();

var str = "";

console.log(birthYear, typeof birthYear);
console.log(currentYear, typeof currentYear);

if (birthYear !== null && birthYear > 1910) {
  var age;
  age = currentYear - birthYear;

  // alert("Та энэ жил " + age + " нас хүрсэн байна!");
  console.log("Та энэ жил " + age + " нас хүрсэн байна!");

  // Насанд хүрсэн эсэхийг шалгах
  if (age > 17) {
    str =
      "<p>Та энэ жил " +
      age +
      " нас хүрсэн байна!</p> " +
      "<li>Насанд хүрсэн!</li>";
    console.log("Насанд хүрсэн!");
  } else {
    str =
      "<p>Та энэ жил " +
      age +
      " нас хүрсэн байна!</p> " +
      "<li>Насанд хүрээгүй!</li>";
    console.log("Насанд хүрээгүй!");
  }
} else {
  str =
    "<p>Та өөрийн төрсөн огноог оруулаагүй эсвэл " +
    birthYear +
    " гэж буруу оруулсан байна! Та зөвхөн өөрийн төрсөн оныг оруулах боломжтой.</p>";
  console.log(
    "Гараас хоосон эсвэл буруу утга оруулсан байна! Та зөвхөн өөрийн төрсөн оныг оруулах боломжтой."
  );
}

document.getElementById("result").innerHTML = str;
