var nickname = "Tom";
console.log(nickname);
console.log(window.nickname);

// globalThis гэж зарласан тохиолдолд илүү өндөр хэмжээгээр дэмжигдэх боломжтой
console.log(globalThis.nickname);

window.alert("Window: Энийг global дотроос дуудаж байна");

personInfo();

function personInfo() {
  var fullname = "Tumurkhuyag";
  console.log(
    "Энэ хүний нэр хоч нь: " + nickname + " бүтэн нэр нь " + fullname
  );
  globalThis.alert("globalThis: Энийг функц дотроос дуудаж байна");
}
