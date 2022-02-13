const productsController= require("../Controllers/productsController")

const express =require("express")

const router= express.Router()

router.get("/detalle_producto",productsController.detalle_producto)

router.get("/home",productsController.home)

router.get("/carro_de_compras",productsController.carro_de_compras)

module.exports=router