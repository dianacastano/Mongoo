const mongoose = require("mongoose");


const profileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfBirth: Date,
    comments: String,
    rol: String
})

profileSchema.pre("save", function(next)
{
    console.log("Middlewarw de entrada");
    if (this.age > 20){
        console.log("Has introducido una edad menor");
        next();
    }
    else
        console.log("Solo edades mayores a 20");
})

module.exports = mongoose.model("Profile", profileSchema, "profile")