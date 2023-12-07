const years = [1990, 1986, 2000, 1998];

// ES5
var ages5 = years.map(function (el) {
  return 2020 - el;
});

console.log(years);
console.log(ages5);

// ES6
var ages6 = years.map((el) => 2019 - el);

var ages7 = years.map((e, index) => `${index}: /2019 - ${e}/`);

var ages8 = years.map((e, i) => {
  let j = i + 1;
  return `${j}: 2019 - ${e}`;
});

console.log(ages6);
console.log(ages7);
console.log(ages8);
