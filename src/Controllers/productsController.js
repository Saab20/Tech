const path = require("path")

const controlador=
{

    editar_producto:(req, res)=>{
        res.render("products/editar_producto.ejs")
    },

    crear_producto:(req, res)=>{
        res.render("products/crear_producto.ejs")
    },

    carro_de_compras:(req, res)=>{
        res.render("products/carro_de_compras.ejs")
    },

    home:(req, res)=>{
        res.render("products/home.ejs")
    },
    detalle_producto:(req, res)=>{
        res.render("products/detalle_producto.ejs")
    },

   
}

module.exports=controlador