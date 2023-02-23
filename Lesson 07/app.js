// Хичээл #7
// Үндсэн операторуудын жишээ

var year, yearJohn, yearMark;

year = 2023;
ageJohn = 28;
ageMark = 30;
ageTom = 30;

console.log('Энэ жил бол : ' + year);

yearJohn = year - ageJohn;
yearMark = year - ageMark;

console.log('John -ын төрсөн жил бол ' + yearJohn);
console.log('Mark -ын төрсөн жил бол ' +yearMark);

// 15 жилийн дараа хэдэн он болох вэ?
var yearAfter = 15;
var future = year + yearAfter;

console.log(year + ' оноос хойш ' + yearAfter + ' жилийн дараа ' + future + ' он байх болно.');

// 18 жилийн дараа Mark хэдэн настай болох вэ?
var futureAgeMark = ageMark + yearAfter;

console.log(year + ' оноос хойш ' + yearAfter + ' жилийн дараа Марк ' + futureAgeMark + ' настай байх болно.');

console.log(year * 2);
console.log(2 ** 3);
console.log(401 % 3);

console.log(ageJohn < ageMark);
console.log(ageJohn > ageMark);
console.log(ageMark >= ageTom);

markOlder = ageMark >= ageTom;

console.log(typeof markOlder);
console.log(typeof(ageMark >= ageTom));
console.log(typeof future);
console.log(typeof ageJohn);

var firstName = 'Tom';
console.log(typeof firsName);

console.log(3/ "a");
console.log(3/0);