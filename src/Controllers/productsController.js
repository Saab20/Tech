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

        idNuevo=0;

		for (let s of products){
			if (idNuevo<s.id){
				idNuevo=s.id;
			}
		}

		idNuevo++;

		let nombreImagen = req.file.filename;
        
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
        image: nombreImagen

        }
        productos.push(productonuevo)
        fs.writeFileSync(productsFilePath,JSON.stringify(productos,null,' '))
        
        res.redirect("/")
       console.log(productonuevo)

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
            fs.unlinkSync(path.join(__dirname, '../../public/img', productoEncontrado.image));
            fs.writeFileSync(productsFilePath, JSON.stringify(productos2,null,' '));
    
            res.redirect("/");
        },

    vitrina_productos:(req, res)=>{
            res.render("products/vitrina_productos.ejs", {productos: products})  
        },
};
    

module.exports=controlador