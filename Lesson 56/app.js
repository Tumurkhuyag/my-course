var birthYear = [1981, 2005, 2014, 1950, 1978, 1986, 2011, 1948, 1961, 2010];

function processArr(myArr, fn) {
  var arr = [];
  for (let i = 0; i < myArr.length; i++) {
    arr.push(fn(myArr[i]));
  }
  return arr;
}

function findAge(el) {
  return new Date().getFullYear() - el;
}

function isAdult(el) {
  return 18 <= el;
}

function maxHeartBeat(el) {
  return Math.round(206.9 - 0.67 * el);
}

function isRetired(el) {
  return 60 <= el;
}

var ages = processArr(birthYear, findAge);

console.log(ages);
console.log(processArr(ages, isAdult));
console.log(processArr(ages, maxHeartBeat));
console.log(processArr(ages, isRetired));

/*var ages = findAge();

console.log(ages);
console.log(isAdult());
console.log(maxHeartBeat());
console.log(isRetired());

function findAge() {
  var arr = [];
  for (let i = 0; i < birthYear.length; i++) {
    arr.push(new Date().getFullYear() - birthYear[i]);
  }
  return arr;
}

function isAdult() {
  var arr = [];
  for (let i = 0; i < ages.length; i++) {
    arr.push(18 <= ages[i]);
  }
  return arr;
}

function maxHeartBeat() {
  var arr = [];
  for (let i = 0; i < ages.length; i++) {
    arr.push(Math.round(206.9 - 0.67 * ages[i]));
  }
  return arr;
}

function isRetired() {
  var arr = [];
  for (let i = 0; i < ages.length; i++) {
    arr.push(60 >= ages[i]);
  }
  return arr;
}*/
