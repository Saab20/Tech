const productsController= require("../Controllers/productsController")

const express =require("express")

const router= express.Router()

router.get("/detalle_producto",productsController.detalle_producto)

router.get("/home",productsController.home)

router.get("/carro_de_compras",productsController.carro_de_compras)

router.get("/crear_producto",productsController.crear_producto)

router.get("/editar_producto",productsController.editar_producto)

module.exports=router