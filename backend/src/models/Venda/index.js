const CRUDModel = require('../../components/CRUDModel');

class Venda extends CRUDModel {
    constructor(tableName) {
        super(tableName);
    }

    listItens(data) {
        return new Promise((resolve, reject) => {
            // list query
            let query = 'Select * from ItensVenda Where idVenda = ?';

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
            let query = 'Select * from ItensVenda Where idVenda = ? and idProduto = ?';

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

module.exports = Venda;