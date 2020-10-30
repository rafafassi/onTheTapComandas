const CRUDModel = require('../../components/CRUDModel');

class Categoria extends CRUDModel {
    constructor(tableName) {
        super(tableName);
    }
}

module.exports = Categoria;