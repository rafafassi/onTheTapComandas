const CRUDModel = require('../../components/CRUDModel');

class ItensComanda extends CRUDModel {
    constructor(tableName) {
        super(tableName);
    }
}

module.exports = ItensComanda;