const Constroller = require('../controllers/Comanda');

module.exports = function(app) {
    const Comanda = new Constroller();

    app.get('/cadastros/comanda/listar', function(req, res) {
        Comanda.list(req, res);
    });

    app.get('/cadastros/comanda/get', function(req, res) {
        Comanda.get(req, res);
    });

    app.put('/cadastros/comanda/', function(req, res) {
        Comanda.set(req, res);
    });

    app.post('/cadastros/comanda/', function(req, res) {
        Comanda.post(req, res);
    });

    app.delete('/cadastros/comanda/del', function(req, res) {
        Comanda.del(req, res);
    });


    app.get('/cadastros/comanda/listar/itens', function(req, res) {
        Comanda.listitens(req, res);
    });

    app.get('/cadastros/comanda/get/item', function(req, res) {
        Comanda.getItem(req, res);
    });
}