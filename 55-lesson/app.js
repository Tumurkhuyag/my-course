function Material(name, price, color) {
  this.name = name;
  this.color = color;
  this.price = price;
}

Material.prototype.appear = function (appear) {
  document.getElementById(appear).textContent =
    this.price + " төгрөгний үнэтэй " + this.name + " харагдлаа";
};

function Animal(age, name, price, color) {
  Material.call(this, name, price, color);
  this.age = age;
}

Animal.prototype = Object.create(Material.prototype);
Animal.prototype.feeds = function (eat) {
  document.getElementById(eat).textContent =
    this.price +
    " төгрөгний үнэтэй " +
    this.color +
    " " +
    this.name +
    " -г хооллолоо";
};

function Human(age, name, price, color) {
  Animal.call(this, age, name, price, color);
}

Human.prototype = Object.create(Animal.prototype);
Human.prototype.think = function (content, thought) {
  document.getElementById(content).textContent =
    this.price +
    " төгрөгний үнэтэй " +
    this.color +
    " арьстай " +
    this.name +
    " нь '" +
    thought +
    "' гэж бодлоо!";
};

var cow = new Animal(3, "үнээ", 800000, "алаг");

cow.appear("appears1");
cow.feeds("eats1");

var h1 = new Human(30, "Том", 5000000000, "шар");
h1.think("think1", "JavaScript сурч л байна даа");
