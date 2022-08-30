require('./database');
const Profesional = require('./model/profesional');
const Pelicula = require('./model/peliculas');
const { randomProfesional, randomPelicula } = require('./ramdomDocu')

// // Borrar profesionales
// Profesional.deleteMany({})
// .then((res) => {
//     console.log('Profesionales borrados')
// })
// .catch((err) => {
//     console.log(err)
// })

// // Borrar peliculas
// Pelicula.deleteMany({})
// .then((res) => {
//     console.log('Películas borradas')
// })
// .catch((err) => {
//     console.log(err)
// })

// // Agregar 20 actores aleatorios
// let arrayProfesionales = [];
// for (let i = 0; i< 20; i++) {
//     arrayProfesionales.push(randomProfesional());
// };

// Profesional.insertMany(arrayProfesionales)
// .then((res) => {
//     console.log('Profesionales agregados')
// })
// .catch((err) => {
//     console.log(err)
// })

// // Agregar 10 peliculas aleatorias
// let arrayPeliculas = [];
// for (let i = 0; i < 10; i++) {
//     arrayPeliculas.push(randomPelicula());
// };

// Pelicula.insertMany(arrayPeliculas)
// .then((res) => {
//     console.log('Películas agregadas')
// })
// .catch((err) => {
//     console.log(err)
// })