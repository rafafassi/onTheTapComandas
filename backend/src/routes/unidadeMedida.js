const Constroller = require('../controllers/UnidadeMedida');

module.exports = function(app) {
    const UnidadeMedida = new Constroller();

    app.get('/cadastros/unidademedida/listar', function(req, res) {
        UnidadeMedida.list(req, res);
    });

    app.get('/cadastros/unidademedida/get', function(req, res) {
        UnidadeMedida.get(req, res);
    });

    app.put('/cadastros/unidademedida/', function(req, res) {
        UnidadeMedida.set(req, res);
    });

    app.post('/cadastros/unidademedida/', function(req, res) {
        UnidadeMedida.post(req, res);
    });

    app.delete('/cadastros/unidademedida/del', function(req, res) {
        UnidadeMedida.del(req, res);
    });
}