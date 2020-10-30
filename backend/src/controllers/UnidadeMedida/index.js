const CRUDController = require('../../components/CRUDController');

class UnidadeMedida extends CRUDController {
    constructor() {
        super('UnidadeMedida', 'UnidadeMedida');
    }
}

module.exports = UnidadeMedida;