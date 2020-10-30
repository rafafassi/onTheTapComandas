const CRUDController = require('../../components/CRUDController');

class Produto extends CRUDController {
    constructor() {
        super('Produto', 'Produto', 'vwProduto');
    }

    async listIngredientes(req, res) {
        const keys = req.query;
        const data = Object.values(keys);

        const model = await this.createModel();

        await model.listIngredientes(data)
            .then((rows) => {
                return res.status(201).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }
    
    async getIngrediente(req, res) {
        const keys = req.query;
        const data = Object.values(keys);

        const model = await this.createModel();

        await model.getIngrediente(data)
            .then((rows) => {
                return res.status(201).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }
}

module.exports = Produto;