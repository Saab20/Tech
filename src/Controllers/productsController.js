const fs = require('fs');
const path = require("path");

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
        res.render("products/home.ejs", {productos: products})
    },

    detalle_producto:(req, res)=>{
        res.render("products/detalle_producto.ejs")
    },
  
}

module.exports=controlador