const Constroller = require('../controllers/Venda');

module.exports = function(app) {
    const Venda = new Constroller();

    app.get('/cadastros/venda/listar', function(req, res) {
        Venda.list(req, res);
    });

    app.get('/cadastros/venda/get', function(req, res) {
        Venda.get(req, res);
    });

    app.put('/cadastros/venda/', function(req, res) {
        Venda.set(req, res);
    });

    app.post('/cadastros/venda/', function(req, res) {
        Venda.post(req, res);
    });

    app.delete('/cadastros/venda/del', function(req, res) {
        Venda.del(req, res);
    });

    app.get('/cadastros/venda/listar/itens', function(req, res) {
        Venda.listitens(req, res);
    });

    app.get('/cadastros/venda/get/item', function(req, res) {
        Venda.getItem(req, res);
    });
}