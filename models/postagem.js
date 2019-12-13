const {Schema, model} = require("mongoose");

const DuvidaSchema = new Schema({
    texto: {
        type: String,
        require: true
    }
});

module.exports = model('duvidas', DuvidaSchema);