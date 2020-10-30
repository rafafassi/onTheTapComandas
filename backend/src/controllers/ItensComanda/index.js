const CRUDController = require('../../components/CRUDController');

class itensComanda extends CRUDController {
    constructor() {
        super('itensComanda', 'itensComanda');
    }
}

module.exports = itensComanda;