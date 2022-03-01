const productsController= require("../Controllers/productsController")

const express =require("express")

const router= express.Router()
const path = require("path");
const multer= require('multer')

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

router.get("/detalle_producto/:id",productsController.detalle_producto)


router.get("/carro_de_compras",productsController.carro_de_compras)

router.get("/crear_producto",productsController.crear_producto)
router.post("/tienda",uploadFile.single("imageproduct"), productsController.tienda)

router.get("/editar_producto/:id",productsController.editar_producto)
router.put("/editar_producto/:id",productsController.update)



// /*** ENRUTADOR PARA BORRAR UN PRODUCTO***/ 
router.delete('/delete/:id', productsController.destroy);

module.exports=router