const express = require ("express");
const router = express.Router();
const ApiController = require("../controllers/apiController");

router.get("/panel", ApiController.panel);

router.get("/usuarios", ApiController.users);
router.get("/usuarios/:id", ApiController.userDetail);

router.get("/productos", ApiController.products);
router.get("/productos/:id", ApiController.productDetail);

module.exports = router
 