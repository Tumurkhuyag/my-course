var a = [];

a.push(34);
a.push("hello");

a.push(function () {
  document.getElementById("f1").textContent =
    "Сайн уу, Массив дотроос мэндчилж байна";

  return function () {
    document.getElementById("f2").textContent =
      "Массив доторх функц доторх функцээс мэндчилж байнаа";

    return function () {
      document.getElementById("f3").textContent =
        "Inception шиг л юм болж байна";
    };
  };
});

a[2]()()();

function prepare() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        console.log("j бол давталт дууссаны дараа : " + j);
        return function () {
          console.log(j);
        };
      })(i)
    );
  }

  console.log("i бол давталт дууссаны дараа : " + i);
  return arr;
}

var massive = prepare();

massive[0]();
massive[1]();
massive[2]();
