module.exports = app => {
    //импортируем наш контроллер, что бы можно было передать им функции по запросу
   
       const deals = require("../controllers/deal.controller.js");
     
       // Создание нового дела по методу post
       app.post("/deals", deals.create);
     
       // Получение всех дел сразу
       app.get("/deals", deals.findAll);
     
       //Получение отдельного дела по id (на самом деле в запросе должен inner_key), но я не стал это менять
       app.get("/deal/:dealId", deals.findOne);
     
       // обновить дело по id
       // здесь тоже самое про inner_key
       app.put("/deal/:dealId", deals.update);
     
       //Удалить дело по id
       app.delete("/deal/:dealId", deals.delete);
     
       // Удалить сразу все дела
       app.delete("/deals", deals.deleteAll);
     };
    