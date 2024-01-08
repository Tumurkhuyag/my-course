// Super class
class Transaction {
  constructor(desc, value) {
    this.desc = desc;
    this.value = value;
  }

  info() {
    let typeText = this instanceof Income ? "Орлого" : "Зарлага";
    return `[ ${typeText} ] ${this.value}₮ ==> ${this.desc}`;
  }
}

// Sub class
class Income extends Transaction {
  constructor(desc, value) {
    super(desc, value);
  }
}

// Sub class
class Expense extends Transaction {
  constructor(desc, value, zaaval = false) {
    super(desc, -value);
    this.zaaval = zaaval;
  }
}

let f = [];
f.push(new Income("Цалин", 2500));
f.push(new Expense("Хоол хүнс", 200, true));
f.push(new Expense("Кино", 70));
f.push(new Expense("Бохь", 7));
f.push(new Income("Сугалаа", 700));
f.push(new Expense("Парк тоглосон", 19));
f.push(new Expense("Байрны мөнгө", 150, true));

f.forEach((e) => console.log(e.info()));
console.log("-----------------------------------------------");
console.log("Үлдэгдэл : " + f.reduce((budget, el) => budget + el.value, 0));

console.log(
  "Зайлшгүй зардал : " +
    f.filter((e) => e.zaaval).reduce((sum, el) => sum + el.value, 0)
);
console.log(
  "Зайлшгүй биш зардал : " +
    f.filter((e) => e.zaaval === false).reduce((sum, el) => sum + el.value, 0)
);
