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

// Animal гэсэн эх model prototype -д drinking гэсэн функц нэмж өгсөн.
Animal.prototype.drinking = function () {
  console.log(this.name + " is drinking.");
};

// Animal гэсэн эх model prototype -д sleeping гэсэн функц нэмж өгсөн.
Animal.prototype.sleeping = function () {
  console.log(this.name + " is sleeping.");
};

var animal1 = new Animal("Sheep");
animal1.eating();

console.log(animal1);

// Animal гэсэн эх model -ийн prototype доторх drinking функцийг харах
console.log(Animal.prototype);
console.log(animal1.__proto__);

var isTrue = animal1.__proto__ === Animal.prototype;
console.log(isTrue);
