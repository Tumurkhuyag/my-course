function showPost(content) {
  var editedContent = "1234.mn -ийн\n" + content;
  document.getElementById("content1").textContent = editedContent;

  return function () {
    var email = prompt(
      editedContent + "\n\nИмэйл хаягаа оруулж хямдралд бүртгүүлнэ үү!"
    );

    document.getElementById("content2").style =
      "background-color: rgb(205, 237, 227); padding: 20px";

    document.getElementById("content2").textContent =
      email + " амжилттай бүртгэгдлээ!";
  };
}

var medee = "ХЯМДРАЛ ДУУСАХАД 1 ХОНОГ ҮЛДЛЭЭ!";
var askEmail = showPost(medee);
setTimeout(askEmail, 2000);
