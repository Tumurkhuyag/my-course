printAge();
console.log(age);
var age = 34;
console.log(age);

function printAge() {
  // var age = 24;
  console.log(age);
}

printAge();

///////////////////////////////////////////////////////

function printInfo(age, nickName, country, city) {
  console.log(arguments);

  console.log(
    arguments[0] +
      " настай " +
      arguments[1] +
      " нь " +
      country +
      " улсын " +
      city +
      " хотод амьдар."
  );
}

printInfo(16, "Tom", "Монгол", "Улаанбаатар");
