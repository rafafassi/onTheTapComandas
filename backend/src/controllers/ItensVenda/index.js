const CRUDController = require('../../components/CRUDController');

class ItensVenda extends CRUDController {
    constructor() {
        super('ItensVenda', 'ItensVenda');
    }
}

module.exports = ItensVenda;