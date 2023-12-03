// Дэлгэцтэй ажиллах контроллер
var uiController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },

    getDOMstrings: function () {
      return DOMstrings;
    },

    addListItem: function (item, type) {
      // Орлого зарлагын элементийг агуулсан html -ийг бэлтгэх
      var html, listType;
      if (type === "inc") {
        listType = ".income__list";
        html =
          '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else {
        listType = ".expenses__list";
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

  // financeController IIFE функц дотор public service бичиж далдлагдсан хувьсагч, функцуудад хандах
  return {
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

    // 2.Оруулж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж, тэндээ хадгална
    var item = financeController.addItem(
      input.type,
      input.description,
      input.value
    );

    console.log(item);
    // 3.Олж авсан өгөгдлүүдээ вебийнхээ тохирох хэсэгт нь гаргана
    uiController.addListItem(item, input.type);

    // 4.Төсвийг тооцоолно
    // 5.Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана
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
