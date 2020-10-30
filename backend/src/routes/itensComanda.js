const Constroller = require('../controllers/ItensComanda');

module.exports = function(app) {
    const ItensComanda = new Constroller();

    app.get('/cadastros/itenscomanda/listar', function(req, res) {
        ItensComanda.list(req, res);
    });

    app.get('/cadastros/itenscomanda/get', function(req, res) {
        ItensComanda.get(req, res);
    });

    app.put('/cadastros/itenscomanda/', function(req, res) {
        ItensComanda.set(req, res);
    });

    app.post('/cadastros/itenscomanda/', function(req, res) {
        ItensComanda.post(req, res);
    });

    app.delete('/cadastros/itenscomanda/del', function(req, res) {
        ItensComanda.del(req, res);
    });
}