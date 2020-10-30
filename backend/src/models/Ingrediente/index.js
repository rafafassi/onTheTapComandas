const CRUDModel = require('../../components/CRUDModel');

class Ingrediente extends CRUDModel {
    constructor(tableName) {
        super(tableName);
    }
}

module.exports = Ingrediente;