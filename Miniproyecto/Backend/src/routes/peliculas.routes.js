const { Router } = require('express');
const router = Router();

// Importar controladores
const { getPelicula, postPelicula, putPelicula, deletePelicula } = require('../controller/peliculas.controller');
const { getActor, postActor, deleteActor } = require('../controller/actor.controller');
const { getDirector, postDirector, deleteDirector } = require('../controller/director.controller');
const { getGuionista, postGuionista, deleteGuionista } = require('../controller/guionista.controller');
const { getProductora } = require('../controller/productora.controller');

// Crear los endpoints para la ruta /peliculas 
router.get('/', getPelicula);
router.post('/', postPelicula);
router.put('/', putPelicula);
router.delete('/', deletePelicula);

// Crear los endpoints para la ruta /peliculas/actor 
router.get('/actor', getActor);
router.post('/actor', postActor);
router.delete('/actor', deleteActor);

// Crear los endpoints para la ruta /peliculas/director 
router.get('/director', getDirector);
router.post('/director', postDirector);
router.delete('/director', deleteDirector);

// Crear los endpoints para la ruta /peliculas/guionista 
router.get('/guionista', getGuionista);
router.post('/guionista', postGuionista);
router.delete('/guionista', deleteGuionista);

// Crear los endpoints para la ruta /peliculas/productora 
router.get('/productora', getProductora);

// Exportar router
module.exports = router;