const mongoose = require("mongoose");


// Crear esquema para Photo

const photoSchema = new mongoose.Schema({
    
    user_name: {
        type: String,
        trim: true,
        required: true
    },
    url_foto: {
        type: String,
        trim: true,
        required: true
    },
    titulo: {
        type: String,
        trim: true,
        required: true
    },
    descripcion: {
        type: String,
        trim: true,
    }
})

module.exports = mongoose.model("Photo", photoSchema, "photo")