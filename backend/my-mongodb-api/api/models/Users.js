const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Users = mongoose.model('User', new Schema({ 
    name: String,
    email: String,
    password: String,
    numero_cuenta: Number, 
    monto: Number,
    estado: Boolean
}))

module.exports = Users

    