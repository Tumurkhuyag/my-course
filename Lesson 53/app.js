function Amitan(ner) {
  var obj = Object.create(Amitan.prototype);
  obj.name = ner;
  obj.hoolloh = function () {
    console.log(obj.name + " хооллож байна.");
  };
  return obj;
}

var animal2 = Amitan("Үхэр");
animal2.hoolloh();

function Animal(ner) {
  this.name = ner;
  this.eating = function () {
    console.log(this.name + " is eating.");
  };
}

var animal1 = new Animal("Sheep");
animal1.eating();

var isTrue = animal1.__proto__ === Animal.prototype;
console.log(isTrue);
