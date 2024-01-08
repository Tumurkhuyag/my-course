document
  .getElementById("containerSection")
  .addEventListener("click", function (event) {
    if (event.target.id !== "containerSection") {
      var el = document.getElementById(event.target.id);
      console.log(el);
      el.parentNode.removeChild(el);
    }
  });
