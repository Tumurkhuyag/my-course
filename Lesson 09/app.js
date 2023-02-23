var birthYear = prompt("Та хэдэн онд төрсөн бэ?");
currentYear = new Date().getFullYear();

console.log(birthYear, typeof birthYear);
console.log(currentYear, typeof currentYear);

if (birthYear !== null && birthYear > 1910) {
  var age;
  age = currentYear - birthYear;

  alert("Та энэ жил " + age + " нас хүрсэн байна!");
  console.log("Та энэ жил " + age + " нас хүрсэн байна!");

  // Насанд хүрсэн эсэхийг шалгах
  if (age > 17) {
    console.log("Насанд хүрсэн!");
  } else {
    console.log("Насанд хүрээгүй!");
  }
} else {
  alert("Та өөрийн төрсөн огноог оруулаагүй эсвэл буруу оруулсан байна!");
  console.log(
    "Гараас хоосон эсвэл буруу утга оруулсан байна! Та зөвхөн өөрийн төрсөн оныг оруулах боломжтой."
  );
}
