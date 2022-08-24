const mongoose = require("mongoose");

// Crear esquema para User
const userSchema = new mongoose.Schema({
    name        : { type: String, trim: true, required: true },    
    surname     : { type: String, trim: true, required: true },
    dateOfBirth : { type: Date, max: new Date() },
    comments    : { type: String, trim: true },
    rol         : { type: String, enum: ['User', 'Admin'], required: true },
    login       : { type: String, trim: true, unique: true, required: true },
    password    : {
        type: String,
        
        match: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/,
        required: true
    },
    address     : { type: String, trim: true, required: true },
    phone       : { type: Number, required: true },
    email       : {
        type: String,
        
        match: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
        required: true,
    },
    follow      : { type: String, trim: true }
})

// Exportar modelo
module.exports = mongoose.model("User", userSchema, "user")
