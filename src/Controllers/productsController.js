const { json } = require('express/lib/response');
const fs = require('fs');
const path = require("path");

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controlador=
{
    editar_producto:(req, res)=>{
        
        let idproducto= req.params.id;
        let productoencontrado=null

        for(let p of products ){
            if (p.id== idproducto){

                productoencontrado=p;
                break;

            }
        }
        res.render("products/editar_producto.ejs",{productos: productoencontrado})
        
    },

    update:(req, res)=>{
    
        let productoseditado=req.body
        let idbuscado= req.params.id
        let productos=products

        for(let p of productos ){
            if (p.id== idbuscado){
                p.name=productoseditado.name
                p.price=productoseditado.price
                p.price2=productoseditado.price2
                p.discount=productoseditado.discount
                p.category=productoseditado.category
                p.description=productoseditado.description
                break;

            }
        }
        
        fs.writeFileSync(productsFilePath,JSON.stringify(productos,null,' '))

        res.redirect("/")
    },

    crear_producto:(req, res)=>{
        res.render("products/crear_producto.ejs")
        
    },

    tienda:(req, res)=>{
        res.render("products/crear_producto.ejs")
        let productos=products
        let idnuevo=products[productos.length-1].id+1

        let productonuevo={
        id : idnuevo,
        name : req.body.name,
        price : req.body.price,
        price2 : req.body.price2,
        discount: req.body.discount,
        category: req.body.category,
        description : req.body.description,
        image: "CYBER_POWER_PC.jpg"

        }
        productos.push(productonuevo)
        fs.writeFileSync(productsFilePath,JSON.stringify(productos,null,' '))
        
        res.redirect("/")
        console.log(productonuevo)

    },

    carro_de_compras:(req, res)=>{
        res.render("products/carro_de_compras.ejs")
    },



    home:(req, res)=>{
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render("main/home.ejs", {productos: products})
    },

    detalle_producto:(req, res)=>{
        let idproducto= req.params.id;
        let productoencontrado=null

        for(let p of products ){
            if (p.id== idproducto){

                productoencontrado=p;
                break;

            }
        }
        res.render("products/detalle_producto.ejs",{productos: productoencontrado})
    },
  
}

module.exports=controlador