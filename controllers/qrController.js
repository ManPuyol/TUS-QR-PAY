let pokemon = require("../MySQL/services/qr");


const controller = {};

controller.getQR = async(req, res) => {
    const data = await pokemon.generateQR(req);

    res.send(data);
};

controller.confirmPass = async(req, res) => {
    const data = await pokemon.confirm(req);
    res.send(data);
};


module.exports = controller;