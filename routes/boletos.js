const router = require("express").Router();

const boletosController = require("../controller/pdf");

router.get("/boletos", boletosController.getBoletos);

module.exports = router;
