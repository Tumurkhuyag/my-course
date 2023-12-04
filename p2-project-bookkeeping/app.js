// Дэлгэцтэй ажиллах контроллер
var uiController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
    incomeList: ".income__list",
    expenseList: ".expenses__list",
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        // Strings хэлбэрээр орж ирсэн тоон утгыг Integer болгож хувиргах
        value: parseInt(document.querySelector(DOMstrings.inputValue).value),
      };
    },

    getDOMstrings: function () {
      return DOMstrings;
    },

    clearFields: function () {
      var fields = document.querySelectorAll(
        DOMstrings.inputDescription + ", " + DOMstrings.inputValue
      );

      // Convert List to Array
      var fieldsArr = Array.prototype.slice.call(fields);
      fieldsArr.forEach(function (el, index, array) {
        el.value = "";
      });

      fieldsArr[0].focus();

      // for (var i = 0; i < fieldsArr.length; i++) {
      //   fieldsArr[i].value = "";
      // }
    },

    addListItem: function (item, type) {
      // Орлого зарлагын элементийг агуулсан html -ийг бэлтгэх
      var html, listType;
      if (type === "inc") {
        listType = DOMstrings.incomeList;
        html =
          '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else {
        listType = DOMstrings.expenseList;
        html =
          '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      // Тэр HTML дотроо орлого зарлагын утгуудыг REPLACE ашиглаж өөрчлөх
      html = html.replace("%id%", item.id);
      html = html.replace("%description%", item.description);
      html = html.replace("%value%", item.value);

      // Бэлтгэсэн HTML -ээ DOM -руу хийх
      document.querySelector(listType).insertAdjacentHTML("beforeend", html);
    },
  };
})();

// Санхүүтэй ажиллах контроллер
var financeController = (function () {
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

  var calculateTotal = function (type) {
    var sum = 0;
    data.items[type].forEach(function (el) {
      sum = sum + el.value;
    });

    data.totals[type] = sum;
  };

  var data = {
    items: {
      inc: [],
      exp: [],
    },

    totals: {
      inc: 0,
      exp: 0,
    },

    balance: 0,

    ratio: 0,
  };

  // financeController IIFE функц дотор public service бичиж далдлагдсан хувьсагч, функцуудад хандах
  return {
    calculateBalance: function () {
      // Нийт орлогыг тооцоолно
      calculateTotal("inc");

      // Нийт зарлагыг тооцоолно
      calculateTotal("exp");

      // Балансын дүнг тооцоолно
      data.balance = data.totals.inc - data.totals.exp;

      // Орлого, зарлагын хувийг тооцоолно
      data.ratio = Math.round((data.totals.exp / data.totals.inc) * 100);
    },

    getBalance: function () {
      return {
        balance: data.balance,
        ratio: data.ratio,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
      };
    },

    addItem: function (type, desc, val) {
      var item, id;

      data.items[type].length === 0
        ? (id = 1)
        : (id = data.items[type][data.items[type].length - 1].id + 1);

      type === "inc"
        ? (item = new Income(id, desc, val))
        : (item = new Expense(id, desc, val));

      data.items[type].push(item);

      return item;
    },
  };
})();

// Холбогч контроллер
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1.Оруулах өгөгдлийг дэлгэцээс олж авна
    var input = uiController.getInput();

    if (input.description !== "" && input.value !== "") {
      // 2.Оруулж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж, тэндээ хадгална
      var item = financeController.addItem(
        input.type,
        input.description,
        input.value
      );

      // 3.Олж авсан өгөгдлүүдээ вебийнхээ тохирох хэсэгт нь гаргана
      uiController.addListItem(item, input.type);
      uiController.clearFields();

      // 4.Балансыг тооцоолно
      financeController.calculateBalance();

      // 5.Балансын дүнг авч хадгална
      var balance = financeController.getBalance();

      // 6.Балансын дүнг дэлгэцэнд гаргана
      console.log(balance);
    }
  };

  var setupEventListeners = function () {
    var DOM = uiController.getDOMstrings();

    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });
    document.addEventListener("keypress", function (event) {
      if (event.key === "Enter" || event.switch === "13") {
        ctrlAddItem();
      }
    });
  };

  return {
    init: function () {
      setupEventListeners();
    },
  };
})(uiController, financeController);

appController.init();
