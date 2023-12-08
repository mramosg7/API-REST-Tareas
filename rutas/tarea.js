const express = require('express')
const router = express.Router()
const tareaController = require('../controladores/tarea')
const validar = require('../middelwares/validar')

/**
 * @openapi
 * /api/tarea/tareas:
 *   get:
 *     summary: Obtiene todas las tareas.
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/tareas", tareaController.getTareas)
router.post("/crear",validar.validarCreate, tareaController.createTarea)
router.put("/update",validar.validarUpdate, tareaController.updateTarea)
router.delete("/delete", validar.validarDelete, tareaController.deleteTarea)
module.exports = router;
