// Дэлгэцтэй ажиллах контроллер
var uiController = (function (){})();
// Санхүтэй ажиллах контроллер 
var financeController = (function (){})();
// Програмын холбогч контроллер
var appController = (function (uiController, financeController){

var ctrlAddItem = function(){
    // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
    console.log("Дэлгэцээс өгөгдлөө авах цэг")
    // 2. Олж авсан өгөгдлүүдээ санхүүгийн контерллерт дамжуулж тэнд хадгална.
    // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана.
    // 4. Төсвийг тооцоолно.
    // 5. Эцсийн үлдэгдэл, Тооцоог дэлгэцэнд гарган. 
 }
  
document.querySelector(".add__btn").addEventListener("click", function(){
    ctrlAddItem();
});
document.addEventListener('keypress', function(event){  
if(event.keyCode === 13) {
    ctrlAddItem();
}

});

})(uiController, financeController);