const router = require("express").Router();

const eliminarController = require("../controller/eliminar");

router.get("/gallo/:idGallo", eliminarController.postEliminarGallo);
router.get("/partido/:idPartido", eliminarController.getEliminarPartido);

module.exports = router