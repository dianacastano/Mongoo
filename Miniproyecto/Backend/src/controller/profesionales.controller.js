const mongoose = require('mongoose');
const Profesional = require("../model/profesional")

// Endpoints de profesionales
// GET
const getProfesional = (req, res) => {
    let id = req.query.id;
    if (id && id.length == 24) {
        Profesional.findById(id)
        .then((resp) => {
            if (resp) {
                return res.status(200).json({ ok: true, message: 'Profesional cargado', respuesta: resp })
            } else {
                return res.status(200).json({ ok: false, message: 'Profesional no encontrado' })
            }
        })
        .catch((err) => {
            return res.status(400).json({ ok: false, message: 'Error al leer/grabar datos en la bbdd', error: err })
        })
    } else if (!id) {
        Profesional.find({})
        .then((resp) => {            
            return res.status(200).json({ ok: true, message: 'Listado de profesionales', respuesta: resp })
        })
        .catch((err) => {
            return res.status(400).json({ ok: false, message: 'Error al leer/grabar datos en la bbdd', error: err})
        })
    } else {
        return res.status(200).json({ ok: false, message: 'El id no es válido' })
    }
}    
                
// POST                
const postProfesional = (req, res) => {
    Profesional.create(req.body,)    
    .then((resp) => {
        return res.status(200).json({ ok: true, message: 'Profesional agregado correctamente', respuesta: {id: resp._id} })
    })
    .catch((err) => {
        return res.status(400).json({ ok: false, message: 'Error al leer/grabar datos en la bbdd', error: err })
    })
};

// PUT
const putProfesional = (req, res) => {    
    let id = req.body.id;
    if (id && id.length == 24) {
        let coleccion = {};
        for(atributo in req.body) {
            if (req.body[atributo] != null && atributo != 'id') {
                coleccion[atributo] = req.body[atributo];
            }
        };
        Profesional.findByIdAndUpdate(id, coleccion)
        .then((resp) => {
            if (resp) {
                return res.status(200).json({ ok: true, message: 'Profesional actualizado correctamente' })
            } else {
                return res.status(200).json({ ok: false, message: 'Profesional no encontrado' })
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
const deleteProfesional = (req, res) => {
    let id = req.body.id;
    if (id && id.length == 24) {
        Profesional.findByIdAndDelete(id)
        .then((resp) => {
            if (resp) {
                return res.status(200).json({ ok: true, message: 'Profesional eliminado correctamente' })
            } else {
                return res.status(200).json({ ok: false, message: 'Profesional no encontrado' })
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
module.exports = { getProfesional, postProfesional, putProfesional, deleteProfesional}