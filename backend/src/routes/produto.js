const Constroller = require('../controllers/Produto');

module.exports = function(app) {
    const Produto = new Constroller();

    app.get('/cadastros/produto/listar', function(req, res) {
        Produto.list(req, res);
    });

    app.get('/cadastros/produto/get', function(req, res) {
        Produto.get(req, res);
    });

    app.put('/cadastros/produto/', function(req, res) {
        Produto.set(req, res);
    });

    app.post('/cadastros/produto/', function(req, res) {
        Produto.post(req, res);
    });

    app.delete('/cadastros/produto/del', function(req, res) {
        Produto.del(req, res);
    });


    app.get('/cadastros/produto/list/ingredientes', function(req, res) {
        Produto.listIngredientes(req, res);
    });

    app.get('/cadastros/produto/get/ingrediente', function(req, res) {
        Produto.getIngrediente(req, res);
    });
}