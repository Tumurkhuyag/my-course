var lessonDone = 81;

var str = "";

for (let index = 1; index <= lessonDone; index++) {
  if (index < 10) {
    str +=
      "<li><a href='/0" +
      index +
      "-lesson/index.html'>Lesson 0" +
      index +
      "</a></li>";
  } else {
    str +=
      "<li><a href='/" +
      index +
      "-lesson/index.html'>Lesson " +
      index +
      "</a></li>";
  }
}

document.getElementById("lessons").innerHTML = str;
