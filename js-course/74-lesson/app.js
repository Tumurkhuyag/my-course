var init = function () {
  animals = ["cat", "mouse", "bird", "dog", "cow"];

  animals.forEach(function (el) {
    console.log(el);
    html = "<button id=" + el + ">" + el + " x </button>";
    document.getElementById("animal").insertAdjacentHTML("beforeend", html);
  });

  return animals;
};

init();

var printAnimals = function () {
  animals.forEach(function (el) {
    html = "<button id=" + el + ">" + el + " x</button>";
    document.getElementById("animal").insertAdjacentHTML("beforeend", html);
  });
};

document.getElementById("animal").addEventListener("click", function (animal) {
  animals.splice(animals.indexOf(animal.target.id), 1);

  document.getElementById("animal").innerHTML = "";

  printAnimals();

  //   console.log(this.animals);
});
