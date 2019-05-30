const router = require("express").Router();

const matchController = require("../controller/matheo");

router.get("/correr", matchController.postCorrerMatcheo);

module.exports = router;
