const Photo = require ("../model/photo")



// GET
const getPhoto = (req, res) => { 
    console.log(req.query)
    let respuesta;
    console.log("Entro al Get Photo")
    if (req.query.user_name != null)
    {
        Photo.find({user_name: req.query.user_name})
        .then((photo) => {
            if (photo.length > 0) {
                respuesta = { error: true, message: `Fotos del usuario con id: ${req.query.id}`, result: photo}
            } else {
                respuesta = { error: false, message: `El usuario con id: ${req.query.id} no tiene fotos`}                
            }
            res.send(respuesta);
        })
        .catch((err) => {
            console.log(err)
        })
    } else{
        res.send({ error: false, message: 'Id de usuario no válido'})
    }
};

// POST                
const postPhoto = (req, res) => {
    let respuesta;
    {
        console.log(req.body);
        let photo = new Photo({user_name: req.body.user_name,
                                    url_foto: req.body.url_foto,
                                    titulo: req.body.titulo,
                                    descripcion: req.body.descripcion})
        photo.save()
        .then((photo) => {
            console.log(photo);
            respuesta = { error: true, message: `Foto del usuario agregada`, result: photo};
            res.send(respuesta);
        })
        .catch((error) => {
            console.log(error);
        })
    }
};

// PUT
const putPhoto = (req, res) => {
    let respuesta;
    let descripcion = req.body.descripcion
    let id = req.body.id ? req.body.id : -1;
    if (id != -1) {
    Photo.findOneAndUpdate({ _id: id }, 
        {
            descripcion: descripcion, 
        }
        )
        .then((photo) => {
            respuesta = { error: false, message: "Descripcion Modificada", result: photo}
        res.send(respuesta);
    });
    } else { 
        respuesta = { error: true, message: "Buscando ID", result: req.body,};
        res.send(respuesta);
    }
}


// DELETE
const deletePhoto = (req, res) => {
    const { user_name, titulo } = req.body;
    let respuesta;
        if (titulo && user_name){
        Photo.findOneAndDelete({ $and: [{ user_name: user_name }, { titulo: titulo }] })
        .then((resp) => {
            if (!resp) {
                console.log('No se ha encontrado ningún registro con los datos especificados')
                res.send(respuesta);
            } else {
                console.log('Operación correcta:');
                console.log(`Foto con título ${resp.titulo} del usuario ${resp.user_name} eliminada`)
            }
        })
    } else if (user_name){
        Photo.deleteMany({ user_name: user_name })
        .then((result) => {
            if (result.deletedCount == 0) {
                respuesta = { error: false, message: 'Foto/s no encontrada/s'}
                res.send(respuesta);
            } else {
                respuesta = { error: false, message: 'Foto/s eliminada/s'}
            }
            return res.status(200).json(respuesta)
        })
        .catch((err) => {
            console.log(err)
        })
    } else{
        return res.status(200).json({ ok: false, message: 'Id de usuario no válido'})
    }
};

// Exportar controladores
module.exports = { getPhoto, postPhoto, putPhoto ,deletePhoto}