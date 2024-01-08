var uiController = (function () {
  var getInput = function () {
    var type = document.getElementById("add__type").value;
    var desc = document.getElementById("add__description").value;
    var val = document.getElementById("add__value").value;
    var input = { type, desc, val };
    return input;
  };

  // Далдлагдсан функц болон өгөгдлүүдрүү хандах боломжтой public service загварчлах
  return {
    transferInput: function () {
      return getInput();
    },
  };
})();

uiController.transferInput();

var myData = (function () {
  var data = {
    items: {
      inc: [],
      exp: [],
    },

    totals: {
      inc: 0,
      exp: 0,
    },
  };

  // Далдлагдсан функц болон өгөгдлүүдрүү хандах боломжтой public service загварчлах
  return {
    publicService: function (type, desc, val) {
      var Income = function (id, desc, val) {
        this.id = id;
        this.desc = desc;
        this.val = val;
      };

      var Expense = function (id, desc, val) {
        this.id = id;
        this.desc = desc;
        this.val = val;
      };

      var id;
      // Обьектийн өгөгдлүүдрүү массивын хаалтаар хандах
      data.items[type].length === 0
        ? (id = 1)
        : (id = data.items[type][data.items[type].length - 1].id + 1);

      type === "inc"
        ? data.items[type].push(new Income(id, desc, val))
        : data.items[type].push(new Expense(id, desc, val));

      return data.items[type];
    },
  };
})();

document.getElementById("btn__add").addEventListener("click", function () {
  var input = uiController.transferInput();
  var item = myData.publicService(input.type, input.desc, input.val);

  console.log("item ", item);

  // Массивын хамгийн сүүлийн элементийг олох динамик код бичих
  var listObject = item[item.length - 1];

  document.getElementById("show__last").innerHTML =
    "<li>" +
    listObject.id +
    "  " +
    listObject.desc +
    "  " +
    listObject.val +
    "</li>";
});
