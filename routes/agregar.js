const router = require("express").Router();

const agregarController = require("../controller/agregar");

router.get("/partido", agregarController.getAgregarEquipo);
router.post("/partido", agregarController.postAgregarEquipo);

router.get("/gallo/:equipo", agregarController.getAgregarGallo);
router.post("/gallo", agregarController.postAgregarGallo);

module.exports = router;
