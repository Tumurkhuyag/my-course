// Бодлого №1: sum нь 1-1000 хүртэлх тоонуудын нийлбэр
var sum = 0;

// Бодлого №2: sumSeven нь 1-1000 хүртэлх тооны 7-д хуваагддаг тоонуудын нийлбэр
var sumSeven = 0;

// Бодлого №2: sumSeven нь 1-1000 хүртэлх анхдагч тоонуудын нийлбэр
var sumUnique = 0;

var start = 1;
var end = 1000;
var subtract = 7;

for (var i = start; i <= end; i++) {
  sum = sum + i;
  // console.log("i = " + i + " байхад sum = " + sum);
  if (i % subtract === 0) {
    sumSeven = sumSeven + i;
  }
  var x = 0;
  for (var j = 1; j <= i; j++) {
    if (i % j === 0) {
      x++;
    }
    if (x > 2) {
      break;
    }
    // Тухайн тоо нь өөрийнхөө хагас тоо хүртэл ердөө 1 тоонд хуваагдаж буйг шалгана.
    else if (i < 2 && i % 2 === 0) {
      break;
    }
  }
  if (x <= 2) {
    sumUnique = sumUnique + i;
    // console.log("i = " + i + " байхад sumUnique = " + sumUnique);
  }
}

// Хариу №1
console.log(
  start + " -с " + end + " хүртэлх тоонуудын нийлбэр нь " + sum + " байна!"
);

// Хариу №2
if (sumSeven === 0) {
  console.log(
    start +
      " -с " +
      end +
      " -ын хооронд " +
      subtract +
      " -д хуваагддаг тоо алга байна!"
  );
} else {
  console.log(
    start +
      " -с " +
      end +
      " -ын хооронд " +
      subtract +
      " -д хуваагддаг тоонуудын нийлбэр нь " +
      sumSeven +
      " байна!"
  );
}

// Хариу №3
if (sumUnique === 0) {
  console.log(start + " -с " + end + " -ын хооронд анхдагч тоо алга байна!");
} else {
  console.log(
    start + " -с " + end + " хүртэлх анхдагч тоонуудын нийлбэр нь " + sumUnique
  );
}
