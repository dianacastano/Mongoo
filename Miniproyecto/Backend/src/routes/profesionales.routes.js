const { Router } = require('express');
const router = Router();

// Importar controladores
const { getProfesional, postProfesional, putProfesional, deleteProfesional } = require('../controller/profesionales.controller')

// Crear los endpoints para la ruta /profesionales 
router.get('/', getProfesional);
router.post('/', postProfesional);
router.put('/', putProfesional);
router.delete('/', deleteProfesional);

// Exportar router
module.exports = router;