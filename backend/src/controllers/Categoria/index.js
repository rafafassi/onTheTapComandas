const CRUDController = require('../../components/CRUDController');

class Categoria extends CRUDController {
    constructor() {
        super('Categoria', 'Categoria');
    }
}

module.exports = Categoria;