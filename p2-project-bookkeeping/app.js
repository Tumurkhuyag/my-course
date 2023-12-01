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
  };
})();

// Санхүүтэй ажиллах контроллер
var financeController = (function () {})();

// Холбогч контроллер
var appController = (function (uiController, appController) {
  var DOM = uiController.getDOMstrings();

  var ctrlAddItem = function () {
    // 1.Оруулах өгөгдлийг дэлгэцээс олж авна
    console.log(uiController.getInput());
    // 2.Оруулж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж, тэндээ хадгална
    // 3.Олж авсан өгөгдлүүдээ вебийнхээ тохирох хэсэгт нь гаргана
    // 4.Төсвийг тооцоолно
    // 5.Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана
  };

  document.querySelector(DOM.addBtn).addEventListener("click", function () {
    ctrlAddItem();
  });
  document.addEventListener("keypress", function (event) {
    if (event.key === "Enter" || event.switch === "13") {
      ctrlAddItem();
    }
  });
})(uiController, appController);
