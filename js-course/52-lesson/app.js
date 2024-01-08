list = [];

var p0 = {
  name: "Tom",
  job: "UX/UI designer & Javascript developer",
  info: function () {
    document.getElementById("profile-image-0").src =
      "/06-lesson/profile-image-" + this.name + ".jpg";
    document.getElementById("profile-image-0").alt = this.name;
    document.getElementById("profile-image-0").title = this.name;
    document.getElementById("preview-0").textContent =
      this.name + " бол " + this.job + ".";
  },
};

var p1 = {};

p1.name = "Uno";
p1.job = "Student";
p1.info = function () {
  document.getElementById("profile-image-1").src =
    "/06-lesson/profile-image-" + this.name + ".jpg";
  document.getElementById("profile-image-1").alt = this.name;
  document.getElementById("profile-image-1").title = this.name;
  document.getElementById("preview-1").textContent =
    this.name + " бол " + this.job + ".";
};

p0.info();
p1.info();

list.push(p0);
list.push(p1);

// Удамшуулах

var Object;
var material = { name: "Бодис" };
material.appear = function () {
  console.log(this.name + " харагдлаа");
};

var animal = Object.create(material);
animal.name = "Амьтан";

var human = Object.create(animal);
human.name = "Хүн";

var soldier = Object.create(human);
soldier.name = "Том";

console.log(soldier.isPrototypeOf());
animal.appear();

var spy = Object.create(human);
spy.name = "Uno";
spy.appear();

// Prototype chain
