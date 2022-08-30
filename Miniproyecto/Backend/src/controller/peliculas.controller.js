const Pelicula = require("../model/peliculas")

// Endpoints de peliculas
// GET
const getPelicula = (req, res) => {
    let id = req.query.id;
    if (id && id.length == 24) {
        Pelicula.findById(id)
        .then((resp) => {
            if (resp) {
                return res.status(200).json({ ok: true, message: 'Película cargada', respuesta: resp })
            } else {
                return res.status(200).json({ ok: false, message: 'Película no encontrada' })
            }
        })
        .catch((err) => {
            return res.status(400).json({ ok: false, message: 'Error al leer/grabar datos en la bbdd', error: err })
        })
    } else if (!id) {
        Pelicula.find({})
        .then((resp) => {            
            return res.status(200).json({ ok: true, message: 'Listado de Películas', respuesta: resp })
        })
        .catch((err) => {
            return res.status(400).json({ ok: false, message: 'Error al leer/grabar datos en la bbdd', error: err })
        })
    } else {
        return res.status(200).json({ ok: false, message: 'El id no es válido' })
    }
};
                
// POST                
const postPelicula = (req, res) => {
    Pelicula.create(req.body)    
    .then((resp) => {
        return res.status(200).json({ ok: true, message: 'Película agregada correctamente', respuesta: {id: resp._id} })
    })
    .catch((err) => {
        return res.status(400).json({ ok: false, message: 'Error al leer/grabar datos en la bbdd', error: err })
    })
};

// PUT
const putPelicula = (req, res) => {
    let id = req.body.id;
    if (id && id.length == 24) {
        let coleccion = {};
        for(atributo in req.body) {
            if (req.body[atributo] != null && atributo != 'id') {
                coleccion[atributo] = req.body[atributo];
            }
        };
        Pelicula.findByIdAndUpdate(id, coleccion)
        .then((resp) => {
            if (resp) {
                return res.status(200).json({ ok: true, message: 'Película actualizada correctamente' })
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

// DELETE
const deletePelicula = (req, res) => {
    let id = req.body.id;
    if (id && id.length == 24) {
        Pelicula.findByIdAndDelete(id)
        .then((resp) => {
            if (resp) {
                return res.status(200).json({ ok: true, message: 'Película eliminada correctamente' })
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
module.exports = { getPelicula, postPelicula, putPelicula, deletePelicula }