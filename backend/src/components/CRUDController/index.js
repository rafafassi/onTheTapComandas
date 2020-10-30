class CRUDController {
    // #Private
    #Model;

    constructor(tableName, modelName, viewName) {
        this.#Model = require('../../models/'+modelName);
        this._tableName = tableName;
        this._viewName = viewName;
    }

    createModel() {
        return new Promise((resolve) => {
            resolve(new this.#Model(this._tableName, this._viewName));
        })
    }

    async list(req, res) {
        const model = await this.createModel();

        await model.list()
            .then((rows) => {
                return res.status(200).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }

    async get(req, res) {
        const keys = req.query;
        const data = Object.values(keys);

        const model = await this.createModel();

        await model.get(data)
            .then((rows) => {
                return res.status(201).json( rows );
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }

    async set(req, res) {
        const {  keys, fields } = req.body;
        const data = Object.values(fields).concat(Object.values(keys));

        const model = await this.createModel();

        await model.set(data)
            .then((rows) => {
                return res.status(201).json({ affectedRows: rows });
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }

    async post(req, res) {
        var data = req.body;

        const model = await this.createModel();

        await model.post(data)
            .then((rows) => {
                return res.status(201).json({ affectedRows: rows });
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }

    async del(req, res) {
        const keys = req.query;
        const data = Object.values(keys);

        const model = await this.createModel();

        await model.del(data)
            .then((rows) => {
                return res.status(201).json({ affectedRows: rows });
            })
            .catch((err) => {
                return res.status(400).json( err );
            });  
        
        model.free();
    }
}

module.exports = CRUDController;