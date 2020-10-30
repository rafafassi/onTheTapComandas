const constroller = require('../controllers/Usuario');

module.exports = function(app) {
    const Usuario = new constroller();

    app.get('/cadastros/usuario/listar', function(req, res) {
        Usuario.list(req, res);
    });

    app.get('/cadastros/usuario/get', function(req, res) {
        Usuario.get(req, res);
    });

    app.put('/cadastros/usuario/', function(req, res) {
        Usuario.set(req, res);
    });

    app.post('/cadastros/usuario/', function(req, res) {
        Usuario.post(req, res);
    });

    app.delete('/cadastros/usuario/del', function(req, res) {
        Usuario.del(req, res);
    });

    app.get('/login', function(req, res) {
        Usuario.logar(req, res);
    })
}