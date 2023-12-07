document.getElementById("changeColor").addEventListener("change", function () {
  var boxes = document.querySelectorAll(".box-1, .box-2");
  boxes.forEach((element) => {
    element.classList.toggle("blue");
  });
});
