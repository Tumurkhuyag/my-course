// Дэлгэцтэй ажиллах контроллер
var uiController = (function () {
})();

// Санхүүтэй ажиллах контроллер
var financeController = (function () {})();

// Холбогч контроллер
var appController = (function (uiController, appController) {

  // Гүйлгээний мэдээллийг нэмж оруулах функц
  var ctrlAddItem = function(){
    console.log("Мэдээллийг татлаа")
    // 1.Оруулах өгөгдлийг дэлгэцээс олж авна  
    // 2.Оруулж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж, тэндээ хадгална
    // 3.Олж авсан өгөгдлүүдээ вебийнхээ тохирох хэсэгт нь гаргана
    // 4.Төсвийг тооцоолно
    // 5.Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана
  }

  document.querySelector('.add__btn').addEventListener('click', function(){
    ctrlAddItem()
  })
  document.addEventListener('keypress', function(event){
    if (event.key === 'Enter' || event.switch === "13") {
      ctrlAddItem()
    }
  })

})(uiController, appController);
