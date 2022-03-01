const productsController= require("../Controllers/productsController")

const express =require("express")

const router= express.Router()

router.get("/detalle_producto/:id",productsController.detalle_producto)


router.get("/carro_de_compras",productsController.carro_de_compras)

router.get("/crear_producto",productsController.crear_producto)
router.post("/tienda",productsController.tienda)

router.get("/editar_producto/:id",productsController.editar_producto)
router.put("/editar_producto/:id",productsController.update)

// /*** ENRUTADOR PARA BORRAR UN PRODUCTO***/ 
router.delete('/delete/:id', productsController.destroy);

module.exports=router