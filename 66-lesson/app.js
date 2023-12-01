var Income = function (id, description, value) {
  this.id = id;
  this.description = description;
  this.value = value;
};

var Expense = function (id, description, value) {
  this.id = id;
  this.description = description;
  this.value = value;
};

var i1 = new Income("1", "Цалин", 3000000);
var i2 = new Income("2", "Номын орлого", 250000);

// console.log(i1);
// console.log(i2);

// var incomes = [];
// incomes.push(i1);
// incomes.push(i2);

// console.log(incomes);

var data = {
  allItems: {
    inc: [],
    exp: [],
  },

  totals: {
    inc: 1000,
    exp: 0,
  },
};

console.log(data.totals.inc);

data.allItems.inc.push(i1);
data.allItems.inc.push(i2);

console.log(data.allItems.inc[1]);
