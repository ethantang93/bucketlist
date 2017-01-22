// products = require('../controllers/ProductController.js')
users = require('../controllers/userController.js')
list = require('../controllers/listController.js')
module.exports = function(app){
  // app.get('/products', products.index);
  app.post('/user', users.create);
  app.get('/users', users.index);
  app.post('/finduser', users.find);
  app.post('/show', users.show);
  app.post('/FindUserByID', users.findid)

  app.post('/list', list.create);
  app.get('/lists', list.index);
  app.get('/get/list/:id',list.find);
  app.delete('/lists/:id',list.delete);
  app.get('/list/check/:id',list.check);
  app.get('/list/uncheck/:id',list.uncheck);
}
