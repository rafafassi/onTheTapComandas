const CRUDModel = require('../../components/CRUDModel');

class ItensVenda extends CRUDModel {
    constructor(tableName) {
        super(tableName);
    }
}

module.exports = ItensVenda;