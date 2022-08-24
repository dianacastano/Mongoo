require("./Base_de_datos")

// Importar modelos
const Photo = require("./Photo");
const User = require("./user");

// // Insertar varios documentos en la colección Photos
// Photo.insertMany([
//     { user_name: 'Diana', url_foto: "https://i.postimg.cc/c6yr6Yrf/perfil.jpg", titulo: "Foto perfil Diana", descripcion: "Ejemplos" },
//     { user_name: 'Diana', url_foto: "https://i.postimg.cc/8zTLHQzM/perfil1.jpg", titulo: "Foto 1 Diana", descripcion: "Ejemplos" },
//     { user_name: 'Diana', url_foto: "https://i.postimg.cc/g2Br6fXY/perfil3.jpg", titulo: "Foto 2 Diana", descripcion: "Ejemplos" },
//     { user_name: 'Jesus Adrian', url_foto: "https://i.postimg.cc/057Dm20c/chico4.jpg", titulo: 'Foto perfil Jesus Adrian', descripcion: "Ejemplos" },
//     { user_name: 'Jesus Adrian', url_foto: "https://i.postimg.cc/0j5kbffg/chico5.jpg", titulo: 'Foto 1 Jesus Adrian', descripcion: "Ejemplos" },
//     { user_name: 'Jesus Adrian', url_foto: "https://i.postimg.cc/JhQGTGtQ/perfil5.webp", titulo: 'Foto 2 Jesus Adrian', descripcion: "Ejemplos" },
//     { user_name: 'Juan Antonio', url_foto: "https://i.postimg.cc/2jdTYxMk/chico.jpg", titulo: 'Foto perfil Juan Antonio', descripcion: "Ejemplos" },
//     { user_name: 'Juan Antonio', url_foto: "https://i.postimg.cc/sxKNgPnN/chico1.jpg", titulo: 'Foto 1 Juan Antonio', descripcion: "Ejemplos" },
//     { user_name: 'Juan Antonio', url_foto: "https://i.postimg.cc/jq9fGndx/chico3.jpg", titulo: 'Foto 2 Juan Antonio', descripcion: "Ejemplos" }
// ])
// .then((resp) => {
//     console.log("Documentos insertados correctamente");
//     console.log(resp)
// })
// .catch((err) => {
//     console.log(err.message);
// })

// // Insertar varios documentos en la colección Users

// User.insertMany([
//     { name: 'Diana', surname: 'Castaño', dateOfBirth: "1992-01-17", comments: 'No comment', rol: 'User',
//     login: 'diana', password: 'P@ssw0rd', address: 'Calle Enrique Tierno Galvan, 19 pta 9', phone: 643315665, email: 'diamarcast1803@gmail.com'
//     },
//     { name: 'Jesus Adrian', surname: 'Guerra', dateOfBirth: "1995-12-01", comments: 'No comment', rol: 'User',
//     login: 'ja1234', password: 'P@ssw0rd', address: 'Calle Enrique Tierno Galvan, 18', phone: 643366768, email: 'jesus1995@gmail.com'
//     },
//     { name: 'Juan antonio', surname: 'Velez', dateOfBirth: "1993-12-28", comments: 'No comment', rol: 'User',
//     login: 'JAVelez', password: 'P@ssw0rd', address: 'Calle Doctor Moliner, 17', phone: 698723194, email: 'juan_antonio@gmail.com'
//     },
    
// ])
// .then((resp) => {
//     console.log("Documentos insertados correctamente");
//     console.log(resp)
// })
// .catch((err) => {
//     console.log(err+ "Error al escribir Documento");
// })

// // Subida de fotos:
// // Dado un usuario, url de foto, titulo y descripción se debe guardar en la colección ‘photos’.
// Photo.create({
//     user_name: 'Juan Antonio',
//     url_foto: 'https://i.postimg.cc/WzXwL16Y/fotoinstagram2.png',
//     titulo: 'Foto 1 Juan',
//     descripcion: 'Ejemplo'
// })
// .then((resp) => {
//     console.log('Documento insertado correctamente');
//     console.log(resp)
// })
// .catch((err) => {
//     console.log(err.message);
// })

// // Obtener fotos:
// // Dado un usuario obtener todas sus fotos
// Photo.find({ user_name: 'Diana' })
// .then((resp) => {
//     console.log(resp)
// })
// .catch((err) => {
//     console.log(err.message)
// })

// // Modificar fotos:
// // Dado el titulo de una foto y una descripción modificar su descripción.

// Photo.updateOne ({titulo: "Foto 1 Jesus Adrian" }, {descripcion: "Nuevo Ejemplo"})
// .then((resp) => {
//         console.log("Documentos insertados correctamente");
//         console.log(resp)
//     })
//     .catch((err) => {
//         console.log(err+ "Error al escribir Documento");
//     })

// // Eliminar Foto:
// // Dado un usuario y un titulo de foto eliminar su foto.
// const usuario = 'Jesus Adrian';
// const titulo  = 'Foto perfil Jesus Adrian';

// Photo.findOneAndDelete({ $and: [{ user_name: usuario }, { titulo: titulo }] })
// .then((resp) => {
//     if (!resp) {
//         console.log('No se ha encontrado ningún registro con los datos especificados')
//     } else {
//         console.log('Operación correcta:');
//         console.log(`Foto con título ${resp.titulo} del usuario ${resp.user_name} eliminada`)
//     }
// })
// .catch((err) => {
//     console.log(err.message)
// })

// // Eliminar todas las Fotos:
// // Dado un usuario eliminar todas sus fotos.
// const usuario = 'Juan Antonio';

// Photo.deleteMany({ user_name: usuario })
// .then((resp) => {
//     if (resp.deletedCount == 0) {
//         console.log(`No se han encontrado fotos para el usuario ${usuario}`)
//     } else {
//         console.log('Operación correcta:');
//         console.log(`${resp.deletedCount} fotos del usuario ${usuario} eliminadas`)
//     }
// })
// .catch((err) => {
//     console.log(err.message)
// })
