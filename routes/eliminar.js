const router = require("express").Router();

const eliminarController = require("../controller/eliminar");

router.get("/gallo/:idGallo", eliminarController.postEliminarGallo);

module.exports = router