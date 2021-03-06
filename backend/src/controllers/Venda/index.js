const CRUDController = require('../../components/CRUDController');

class Venda extends CRUDController {
    constructor() {
        super('Venda', 'Venda');
    }

    async listItens(req, res) {
        const keys = req.query;
        const data = Object.values(keys);

        const model = await this.createModel();

        await model.listItens(data)
            .then((rows) => {
                return res.status(201).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }
    
    async getItem(req, res) {
        const keys = req.query;
        const data = Object.values(keys);

        const model = await this.createModel();

        await model.getItem(data)
            .then((rows) => {
                return res.status(201).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }
}

module.exports = Venda;