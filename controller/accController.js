const Service = require('../service/accService');

async function login(req, res){
    try {
        const result = await Service.login(req.body);
        res.status(200).json(result);
    }
    catch(err) {
        console.log(err);
        res.status(400).send(err);
    }
}

async function register(req, res){
    try {
        const result = await Service.register(req.body);
        res.status(200).json(result);
    }
    catch(err) {
        console.log(err);
        res.status(400).send(err);  
    }
}

module.exports = { login, register };