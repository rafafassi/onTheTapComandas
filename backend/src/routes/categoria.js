const Constroller = require('../controllers/Categoria');

module.exports = function(app) {
    const Categoria = new Constroller();

    app.get('/cadastros/categoria/listar', function(req, res) {
        Categoria.list(req, res);
    });

    app.get('/cadastros/categoria/get', function(req, res) {
        Categoria.get(req, res);
    });

    app.put('/cadastros/categoria/', function(req, res) {
        Categoria.set(req, res);
    });

    app.post('/cadastros/categoria/', function(req, res) {
        Categoria.post(req, res);
    });

    app.delete('/cadastros/categoria/del', function(req, res) {
        Categoria.del(req, res);
    });
}