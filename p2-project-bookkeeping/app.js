var uiController = (function () {
  var x = 100;

  function add(y) {
    return x + y;
  }

  return {
    publicAdd: function (para) {
      para = add(para);
      console.log(para);
    },
  };
})();

var financeController = (function () {})();

var appController = (function (uiController, appController) {
  uiController.publicAdd(50);
})(uiController, appController);
