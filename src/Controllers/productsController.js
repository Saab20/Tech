const { json } = require('express/lib/response');
const fs = require('fs');
const path = require("path");

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controlador=
{

    home:(req, res)=>{
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render("home", {productos: products})
    },

    detalle_producto:(req, res)=>{
        let idProducto= req.params.id;
        let productoEncontrado=null

        for(let p of products ){
            if (p.id== idProducto){

                productoEncontrado=p;
                break;

            }
        }
        res.render("products/detalle_producto.ejs",{productos: productoEncontrado})
    },

    editar_producto:(req, res)=>{
        
        let idProducto= req.params.id;
        let productoEncontrado=null

        for(let p of products ){
            if (p.id== idProducto){

                productoEncontrado=p;
                break;

            }
        }
        res.render("products/editar_producto.ejs",{productos: productoEncontrado})
        
    },

    update:(req, res)=>{
    
        let productoseditado=req.body
        let idbuscado= req.params.id
        let productos=products

        for(let p of productos ){
            if (p.id== idbuscado){
                p.name=productosEditado.name
                p.price=productosEditado.price
                p.price2=productosEditado.price2
                p.discount=productosEditado.discount
                p.category=productosEditado.category
                p.description=productosEditado.description
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
       //console.log(productonuevo)

    },

    carro_de_compras:(req, res)=>{
        res.render("products/carro_de_compras.ejs")
    },

        // Delete - Borrar un producto
    destroy : (req, res) => {
        let idProductoSeleccionado = req.params.id;
        let productoEncontrado=null;
    
        for (let p of products){
            if (p.id==idProductoSeleccionado){
                productoEncontrado=p;
                break;
                }
            }
    
            let productos2 = products.filter(function(e){
                return e.id!=productoEncontrado.id;
            })
    
            fs.writeFileSync(productsFilePath, JSON.stringify(productos2,null,' '));
    
            res.redirect("/");
        }
};
    

module.exports=controlador