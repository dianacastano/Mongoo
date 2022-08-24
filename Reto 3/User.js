const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    login: String,
    password: {
        type: String,
        validate: [
            function(password) {
                return password.length >= 8;
            },
            "El password debe ser mas largo"],
            select: false
    }
})


module.exports = mongoose.model("User", userSchema, "user")