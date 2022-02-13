const path = require("path")

const controlador=
{
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