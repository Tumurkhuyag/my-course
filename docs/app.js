var lessonDone = 55;

var str = "";

for (let index = 6; index <= lessonDone; index++) {
  if (index < 10) {
    str +=
      "<li><a href='/Lesson 0" +
      index +
      "/index.html'>Lesson 0" +
      index +
      "</a></li>";
  } else {
    str +=
      "<li><a href='/Lesson " +
      index +
      "/index.html'>Lesson " +
      index +
      "</a></li>";
  }
}

document.getElementById("lessons").innerHTML = str;
