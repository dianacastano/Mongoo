const mongoose = require('mongoose')
const Pelicula3 = require("../model/peliculas")

// Endpoints de peliculas/productora
// GET
const getProductora = (req, res) => {
    let id = req.query.id;
    if (id && id.length == 24) {
        Pelicula3.findById(id)
        .then((resp) => {
            if (resp) {
                return res.status(200).json({ ok: true, message: 'Productora cargada', respuesta: resp.producer })
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

// Exportar controladores
module.exports = {getProductora}