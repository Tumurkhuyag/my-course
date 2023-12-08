// ES5 бичиглэлээр нас олдог функцруу хүмүүсийн төрсөн оны дамжуулж насыг нь бодох
// -----------------------------------------------
function printAge() {
  // Обьект хэлбэртэй байгаа
  console.log(arguments);
  // Обьект хэлбэртэй учир forEach функц ашиглан давталт хийх боломжгүй
  // arguments.forEach(function (el) {});

  var arr = Array.prototype.slice.call(arguments);
  // Массив болж хувирлаа
  console.log(arr);

  // Массив болсон учир forEach фунц ашиглан давталт хийх боломжтой боллоо
  arr.forEach(function (el) {
    console.log(
      "Birth year: " + el + " age: " + (new Date().getFullYear() - el)
    );
  });
}

printAge(1990, 2005, 1996);

// ES6 дээр орсон нэмэлт боломжуудаг ашиглан бодох
// -----------------------------------------------

function printAge2(gender, registered, ...years) {
  years.forEach((el) =>
    console.log(
      `Gender: ${gender}, Birth year: ${el}, age: ${
        new Date().getFullYear() - el
      }`
    )
  );
}

printAge2("female", true, 1990, 2005, 1996);
