require("./Base_de_datos")

// Importar modelos
const User = require("./User");
const Profile = require("./Profile");
const Credential = require("./Credential");
const { default: mongoose } = require("mongoose");

// Insertar un documento en cada colección para comprobar que funciona
// Model User
const userDocument = new User({
    login: "Darwin0111",
    password: "darwin1234"
});

userDocument.save(checkRespuesta)

function checkRespuesta(err,res) {

    if (err) 
        console.log("Error: " + err);
        
    else 
    {
        console.log("Documento guardado correctamente");
        // mongoose.disconnect();
    }    
    
}


// Model Profile
const profileDocument = new Profile({

    name: "Darwin",
    surname: "Larrahondo",
    dateOfBirth: "2000-12-12",
    comments: "No comment",
    rol: "User"
})

profileDocument.save(checkRespuesta)

function checkRespuesta(err,res) {

    if (err) 
        console.log("Error: " + err);
        
    else 
    {
        console.log("Documento guardado correctamente");
        // mongoose.disconnect();
    }    
    
}

// Model Credentials
const credentialDocument = new Credential({

    address: "Calle Profesor Enrique Tierno Galvan, 19, pta9",
    phone: 643315665,
    email: "darwin2011@gmail.com"
})

credentialDocument.save(checkRespuesta)

function checkRespuesta(err,res) {

    if (err) 
        console.log("Error: " + err);
        
    else 
    {
        console.log("Documento guardado correctamente");
        // mongoose.disconnect();
    }    
    
}