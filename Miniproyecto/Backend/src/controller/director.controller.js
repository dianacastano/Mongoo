const mongoose = require('mongoose')
const Pelicula1 = require('../model/peliculas')

// Controladores para las peticiones a los endpoints de peliculas/director
// GET
const getDirector = (req, res) => {
    let id = req.query.id;
    if (id && id.length == 24) {
        Pelicula1.findById(id)
        .then((resp) => {
            if (resp) {
                return res.status(200).json({ ok: true, message: 'Directores cargados', respuesta: resp.directors })
            } else {
                return res.status(200).json({ ok: false, message: 'Película no encontrada' })
            }
        })
        .catch((err) => {
            return res.status(400).json({ ok: false, message: 'Error al leer/grabar datos en la bbdd', error: err })
        })
    } else {
        return res.status(200).json({ ok: false, message: 'El id no es válido' })
    }
};
                
// POST                
const postDirector = (req, res) => {
    const { id, name } = req.body;
    if (name && id && id.length == 24) {
        Pelicula1.findById(id, { _id: 1, directors: 1 })
        .then((resp) => {
            if (resp) {
                let directors = resp.directors;
                if (directors.includes(name)) {
                    return res.status(200).json({ ok: false, message: 'Director ya existe' })
                } else {
                    directors.push(name);
                    Pelicula1.findByIdAndUpdate(id, {directors: directors})
                    .then((resp) => {
                        return res.status(200).json({ ok: true, message: 'Director agregado correctamente' })
                    })
                };
            } else {
                return res.status(200).json({ ok: false, message: 'Película no encontrada' })
            }
        })
        .catch((err) => {
            return res.status(400).json({ ok: false, message: 'Error al leer/grabar datos en la bbdd', error: err })
        })
        
    } else {
        return res.status(200).json({ ok: false, message: 'El id no es válido o falta nombre director' })
    }
};

// DELETE
const deleteDirector = (req, res) => {
    let { id, name } = req.body;
    if (name && id && id.length == 24) {
        Pelicula1.findById(id, { _id: 1, directors: 1 })
        .then((resp) => {
            if (resp) {
                let directors = resp.directors;
                if (directors.includes(name)) {
                    directors.splice(directors.indexOf(name), 1);
                    Pelicula1.findByIdAndUpdate(id, {directors: directors})
                    .then((resp) => {
                        return res.status(200).json({ ok: true, message: 'Director eliminado correctamente' })
                    })
                } else {
                    return res.status(200).json({ ok: false, message: 'Director no encontrado' })
                };
            } else {
                return res.status(200).json({ ok: false, message: 'Película no encontrada' })
            }
        })
        .catch((err) => {
            return res.status(400).json({ ok: false, message: 'Error al leer/grabar datos en la bbdd', error: err })
        })
        
    } else {
        return res.status(200).json({ ok: false, message: 'El id no es válido o falta nombre Director' })
    }
};

// Exportar controladores
module.exports = {getDirector,postDirector,deleteDirector}