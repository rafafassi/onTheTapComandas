const Constroller = require('../controllers/Ingrediente');

module.exports = function(app) {
    const Ingrediente = new Constroller();

    app.get('/cadastros/ingrediente/listar', function(req, res) {
        Ingrediente.list(req, res);
    });

    app.get('/cadastros/ingrediente/get', function(req, res) {
        Ingrediente.get(req, res);
    });

    app.put('/cadastros/ingrediente/', function(req, res) {
        Ingrediente.set(req, res);
    });

    app.post('/cadastros/ingrediente/', function(req, res) {
        Ingrediente.post(req, res);
    });

    app.delete('/cadastros/ingrediente/del', function(req, res) {
        Ingrediente.del(req, res);
    });
}