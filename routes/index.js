const router = require("express").Router();

const indexController = require("../controller/index");

router.get("/", indexController.getIndex);

module.exports = router