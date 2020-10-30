const CRUDController = require('../../components/CRUDController');

class Ingrediente extends CRUDController {
    constructor() {
        super('Ingrediente', 'Ingrediente');
    }
}

module.exports = Ingrediente;