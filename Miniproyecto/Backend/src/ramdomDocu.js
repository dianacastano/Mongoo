const Fakerator = require('fakerator');
const fakerator = Fakerator('es-ES');

// Devuelve un profesional aleatorio
function randomProfesional() {
    return {
        name: fakerator.names.firstName(),
        age: fakerator.date.age(20, 60),
        genre: fakerator.random.arrayElement(['Femenino', 'Masculino']),
        weight: fakerator.random.number(50, 90),
        height: fakerator.random.number(150, 200),
        hairColor: fakerator.random.arrayElement(['Rubio', 'Negro', 'Castaño', 'Pelirrojo']),
        eyeColor: fakerator.random.arrayElement(['Negro', 'Azul', 'Castaño', 'Verde']),
        race: fakerator.random.arrayElement(['Americana', 'Caucásica', 'Etiópica', 'Malaya', 'Mongólica']),
        isRetired: fakerator.random.boolean(),
        nationality: fakerator.random.arrayElement(['Inglesa', 'Estadounidense', 'Española', 'Francesa', 'Alemana']),
        oscarsNumber: fakerator.random.number(0, 5),
        profession: fakerator.random.arrayElement(['Actor', 'Director', 'Guionista']),
        
    }
}

// Devuelve una película aleatoria
function randomPelicula() {
    let arrayActores = [];
    let arrayDirectores = [];
    let arrayGuionistas = [];
    for (let i = 0; i < 3; i++) { 
        arrayActores.push(fakerator.names.firstName());
        arrayDirectores.push(fakerator.names.firstName());
        arrayGuionistas.push(fakerator.names.firstName())
    };
    return {
        title: fakerator.lorem.sentence(),
        releaseYear: fakerator.random.number(1980, 2022),
        nationality: fakerator.random.arrayElement(['Inglesa', 'Estadounidense', 'Española', 'Francesa', 'Alemana']),
        language: fakerator.random.arrayElement(['Inglés', 'Español', 'Francés', 'Alemán']),
        platform: fakerator.random.arrayElement(['Streaming', 'Cine', 'TV']),
        isMCU: fakerator.random.boolean(),
        mainCharacterName: fakerator.names.firstName(),
        distributor: fakerator.random.arrayElement(['Sony', 'Walt Disney', 'Paramount', 'Warner Bros']),
        genre: fakerator.random.arrayElement(['Acción', 'Aventuras', 'Ciencia Ficción', 'Comedia', 'Drama', 'Fantasía', 'Musical']),
        producer: fakerator.random.arrayElement(['Columbia Pictures', '20th Century-Fox', 'Warner Bros', 'Paramount Pictures', 'Universal Pictures', 'Metro Goldwyn Mayer', 'United Artists', 'RKO Radio Pictures']),
        actors: arrayActores,
        directors: arrayDirectores,
        writers: arrayGuionistas,
        
    }
}


module.exports = { randomProfesional,randomPelicula}