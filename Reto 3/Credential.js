const mongoose = require("mongoose");


const credentialSchema = new mongoose.Schema({
    address: String,
    phone: Number,
    email: String
})


module.exports = mongoose.model("Credential", credentialSchema, "credential")