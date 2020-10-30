const Constroller = require('../controllers/ItensVenda');

module.exports = function(app) {
    const ItensVenda = new Constroller();

    app.get('/cadastros/itensvenda/listar', function(req, res) {
        ItensVenda.list(req, res);
    });

    app.get('/cadastros/itensvenda/get', function(req, res) {
        ItensVenda.get(req, res);
    });

    app.put('/cadastros/itensvenda/', function(req, res) {
        ItensVenda.set(req, res);
    });

    app.post('/cadastros/itensvenda/', function(req, res) {
        ItensVenda.post(req, res);
    });

    app.delete('/cadastros/itensvenda/del', function(req, res) {
        ItensVenda.del(req, res);
    });
}