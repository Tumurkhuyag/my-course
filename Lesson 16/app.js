// Обьект зарлъя

var human1 = {
  name: "Tom",
  gender: "He",
  job: "UX designer",
  hobby: "eating",
  address: {
    city: "Ulaanbaatar",
    country: "Mongolia",
  },
};

var human2 = {
  name: "Enku",
  gender: "He",
  job: "coder",
  hobby: "dancing",
};

console.log(
  human1.name +
    " is a " +
    human1.job +
    ". " +
    human1.gender +
    " likes " +
    human1.hobby +
    ". " +
    human1.gender +
    " lives " +
    human1.address.city +
    "."
);
console.log(
  human2.name +
    " is a " +
    human2.job +
    ". " +
    human2.gender +
    " likes " +
    human2.hobby +
    "."
);

var uxCourse = {
  name: "UX design fundamentals",
  duration: "2 weeks",
  auhtor: human1,
  price: 350000,
  discount: 50000,
};

console.log(uxCourse.auhtor.name + " teaches " + uxCourse.name + ".");
