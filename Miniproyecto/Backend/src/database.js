const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Diana_1792:Darwin_0192@cluster0.u26k8qf.mongodb.net/MiniProyecto", {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then((bd) => {
    console.log("Base de datos conectada en", bd.connection.host);
})
.catch((error) => {
    console.log(error)
})