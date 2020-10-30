const CRUDModel = require('../../components/CRUDModel');

class Comanda extends CRUDModel {
    constructor(tableName) {
        super(tableName);
    }

    listItens(data) {
        return new Promise((resolve, reject) => {
            // list query
            let query = 'Select * from ItensComanda Where idComanda = ?';

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

    getItem(data) {
        return new Promise((resolve, reject) => {
            // list query
            let query = 'Select * from ItensComanda Where idComanda = ? and idProduto = ?';

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

module.exports = Comanda;