const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    id       : String,
    name     : String,
    surname  : String,
    email    : String,
    phone    : Number
});

module.exports = model('MedicoDerivante', userSchema);