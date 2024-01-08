console.log(this);

hello();

function hello() {
  console.log("hello функц ажиллаа");
  console.log(this);
  console.log(window);
  console.log(globalThis);
}

var p1 = {
  name: "Tom",
  printThis() {
    console.log(this);

    function second() {
      console.log("Second() ажиллалаа " + this);
    }

    second();
  },
};

var p2 = {
  name: "Naraa",
};

// Нэг обьектийн функцийг нөгөө обьект нь зээлж авч хэрэглэх боломжтой байдаг
p2.printThis = p1.printThis;

p1.printThis();
p2.printThis();
