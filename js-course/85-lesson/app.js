let level = 1;
let levelName = "Monster revenge";
let zombieCount = 200;

// Хэзээ ч доторхыг нь өөрлөхгүй функц бичье гэвэл const гэж зарлахад л болно
// ---------------------------------
// const gameDuration = function (zombieCount) {
//   return zombieCount * 3;
// };

let gameDuration = function (zombieCount) {
  return zombieCount * 3;
};

// ES5
// ---------------------------------
let gameInfo_1 =
  "Үе №" +
  level +
  ", үеийн нэр: " +
  levelName +
  ", Зомбигийн тоо: " +
  zombieCount +
  ", Үргэлжлэх хугацаа: " +
  gameDuration(zombieCount) +
  " секунд";

console.log("gameInfo_1 : " + gameInfo_1);

// ES6 ${} дээр хялбаршуулах боломжтой
// ---------------------------------
let gameInfo_2 = `   Үе №${level},
                үеийн нэр: ${levelName},
                Зомбигийн тоо: ${zombieCount},
                Үргэлжлэх хугацаа: ${gameDuration(zombieCount)} секунд`;

console.log(`gameInfo_2 : ${gameInfo_2}`);

// ES6 Strings -ийн мөрийн эхлэл болон төгсгөлийг шалгах
// ---------------------------------
console.log(levelName.startsWith("M"));
console.log(levelName.startsWith("Monster r"));

console.log(levelName.endsWith("e"));
console.log(levelName.endsWith("er revenge"));

// ES6 `${levelName}   `.repeat(100)
// ---------------------------------
console.log(`${levelName}   `.repeat(100));
