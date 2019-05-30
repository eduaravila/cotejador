const router = require("express").Router();

const editarController = require("../controller/editar");

router.get("/gallo/:idGallo", editarController.getEditarGallo);
router.post("/gallo", editarController.postEditarGallo);

module.exports = router;
