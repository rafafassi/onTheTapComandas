const CRUDModel = require('../../components/CRUDModel');

class Peoduto extends CRUDModel {
    constructor(tableName) {
        super(tableName);
    }

    listIngredientes(data) {
        return new Promise((resolve, reject) => {
            // list query
            let query = 'Select * from Ingrediente Where idProduto = ?';

            this._conn.query({
                sql: query,
                values: data
            }, 
            (err, rows) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(rows);
                }
            });
        })
    }

    getIngrediente(data) {
        return new Promise((resolve, reject) => {
            // list query
            let query = 'Select * from Ingrediente Where idIngrediente = ? and idProduto = ?';

            this._conn.query({
                sql: query,
                values: data
            }, 
            (err, rows) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(rows);
                }
            });
        })
    }
}

module.exports = Peoduto;