const productsController= require("../Controllers/productsController")

const express =require("express")

const router= express.Router()
const path = require("path");
const multer= require('multer')
const validatorProducts = require('../../middlewares/validateProductsMiddlewares')

// configuracion multer

const configuracionImagen = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/img'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName =  Date.now() + file.originalname ;   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});

const uploadFile = multer({ storage: configuracionImagen });

// /*** ENRUTADOR PARA DETALLE DE UN PRODUCTO***/ 
router.get("/detalle_producto/:id",productsController.detalle_producto)

// /*** ENRUTADOR PARA CARRO DE COMPRA***/||
router.get("/carro_de_compras/",productsController.carro_de_compras)


// /*** ENRUTADOR PARA CREAR UN PRODUCTO***/
router.get("/crear_producto",productsController.crear_producto)
router.post("/tienda",uploadFile.single("imageproduct"), validatorProducts, productsController.create)

// /*** ENRUTADOR PARA EDITAR UN PRODUCTO***/
router.get("/editar_producto/:id",productsController.editar_producto)
router.put("/editar_producto/:id",productsController.update)

// /*** ENRUTADOR PARA BORRAR UN PRODUCTO***/ 
router.delete('/delete/:id', productsController.destroy);

// /*** ENRUTADOR PARA VITRINA DE PRODUCTOS***/ 
router.get("/vitrina_productos",productsController.vitrina_productos)

module.exports=router