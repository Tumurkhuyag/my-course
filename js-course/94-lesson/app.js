// ES5
// ----------------------------------------
function Expense(id, desc, value) {
  this.id = id;
  this.desc = desc;
  this.value = value;
}

Expense.prototype.info = function () {
  console.log(this.id + ") " + this.value + "₮ " + this.desc);
};

var e1 = new Expense(1, "Хоол хүнс", 26000);
var e2 = new Expense(2, "Бензин", 350000);

e1.info();
e2.info();

// ES6
// ----------------------------------------
class Income {
  constructor(id, desc, value) {
    this.id = id;
    this.desc = desc;
    this.value = value;
  }

  info() {
    console.log(this.id + ") " + this.value + "₮ " + this.desc + " орлого ");
  }

  static getDollarHansh() {
    console.log("Ханш : " + 2720);
  }
}

let i1 = new Income(6, "Цалин", 2500000);
i1.info();

Income.getDollarHansh();
