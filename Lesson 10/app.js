var isCelebrity;
var isRich;

console.log(typeof isCelebrity, isRich);

isCelebrity = true;
isRich = false;

if (isCelebrity === true && isRich === true) {
  console.log("Алдартан бас Баян байж!");
} else if (isCelebrity === true || isRich === true) {
  console.log("Алдартан эсвэл Баяны аль нэг нь байж!");
} else {
  console.log("Аль нь биш байж!");
}
