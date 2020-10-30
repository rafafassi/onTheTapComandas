const Constroller = require('../controllers/FormaPagto');

module.exports = function(app) {
    const FormaPagto = new Constroller();

    app.get('/cadastros/formapagto/listar', function(req, res) {
        FormaPagto.list(req, res);
    });

    app.get('/cadastros/formapagto/get', function(req, res) {
        FormaPagto.get(req, res);
    });

    app.put('/cadastros/formapagto/', function(req, res) {
        FormaPagto.set(req, res);
    });

    app.post('/cadastros/formapagto/', function(req, res) {
        FormaPagto.post(req, res);
    });

    app.delete('/cadastros/formapagto/del', function(req, res) {
        FormaPagto.del(req, res);
    });
}